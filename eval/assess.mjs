import {sha} from './suite.mjs';

// These checks validate captured evidence, not an AI's claim about its actions.
export const rubricKeys=['taskCorrectness','sourceGrounding','uncertainty','scopeAndPreservation','actionEvidence','beginnerUsability'];
export function assess(spec,capture,review=null){
  const failures=[],pending=[];
  if(capture.promptHash!==spec.promptHash||capture.fixtureHash!==spec.fixtureHash)failures.push('HASH_MISMATCH');
  const files=capture.files||{},body=files[spec.expected.primaryFile];
  if(typeof body!=='string'||!body.trim())failures.push('PRIMARY_OUTPUT_MISSING');
  else{
    const headings=body.split(/\r?\n/).filter(l=>/^## /.test(l)).map(l=>l.slice(3).trim());
    for(const h of spec.expected.headings)if(!headings.includes(h))failures.push(`HEADING_MISSING:${h}`);
    if(spec.expected.preserveMarker&&!body.includes(spec.expected.preserveMarker))failures.push('EXISTING_CONTENT_LOST');
  }
  for(const [file,hash] of Object.entries(spec.expected.protectedFiles))if(sha(files[file]??'')!==hash)failures.push(`PROTECTED_FILE_CHANGED:${file}`);
  for(const file of Object.keys(files))if(!safeRelative(file))failures.push(`UNSAFE_PATH:${file}`);
  if(!capture.transcript?.trim())failures.push('TRANSCRIPT_MISSING');
  if(!capture.metadata?.tool||capture.metadata.tool!==spec.tool)failures.push('TOOL_MISMATCH');
  if(!capture.metadata?.environment||!capture.metadata?.accountMode||!Array.isArray(capture.metadata?.availableTools))failures.push('ENVIRONMENT_MISSING');
  if(!['files','manual-fallback'].includes(capture.metadata?.outputMode))failures.push('OUTPUT_MODE_MISSING');
  if(!capture.metadata?.startedAt||!capture.metadata?.finishedAt||!Number.isFinite(Date.parse(capture.metadata.startedAt))||!Number.isFinite(Date.parse(capture.metadata.finishedAt))||Date.parse(capture.metadata.finishedAt)<Date.parse(capture.metadata.startedAt))failures.push('RUN_TIMESTAMPS_INVALID');
  if(!review)pending.push('HUMAN_REVIEW_REQUIRED');
  else{
    if(!review.reviewer?.trim()||!Number.isFinite(Date.parse(review.reviewedAt)))pending.push('REVIEW_ATTRIBUTION_MISSING');
    if(review.captureHash!==sha(JSON.stringify(capture)))failures.push('REVIEW_CAPTURE_MISMATCH');
    for(const key of rubricKeys){
      const item=review.criteria?.[key];
      if(!item||typeof item.pass!=='boolean'||!item.evidence?.trim())pending.push(`REVIEW_REQUIRED:${key}`);
      else if(!item.pass)failures.push(`REVIEW_FAILED:${key}`);
    }
    // A capability block must be explained; it must never count as a successful run.
    if(review.capabilityBlocked&&!review.capabilityEvidence?.trim())pending.push('CAPABILITY_EVIDENCE_REQUIRED');
  }
  const changes=[...new Set([...Object.keys(spec.sources),...Object.keys(files)])].filter(f=>spec.sources[f]!==files[f]).map(file=>({file,before:spec.sources[file]===undefined?null:sha(spec.sources[file]),after:files[file]===undefined?null:sha(files[file])}));
  const status=failures.length?'FAIL':pending.length?'NEEDS_REVIEW':review.capabilityBlocked?'BLOCKED_CAPABILITY':'PASS_REVIEWED';
  return {status,failures,pending,changes,outputMode:capture.metadata?.outputMode??null,model:capture.metadata?.model||'UNKNOWN',syntheticFixture:true,testOnly:capture.metadata?.testOnly===true};
}
export function safeRelative(file){
  return typeof file==='string'&&file.length>0&&!/^[a-z]:|^[/\\]/i.test(file)&&!file.includes('\\')&&!file.split('/').some(p=>p==='..'||p==='.'||!p)&&!file.includes(':');
}

export function compareRuns(left,right){
  if(left.assessment.testOnly||right.assessment.testOnly)throw Error('Synthetic assessor tests are not model evidence');
  if(!['PASS_REVIEWED','FAIL','BLOCKED_CAPABILITY'].includes(left.assessment.status)||!['PASS_REVIEWED','FAIL','BLOCKED_CAPABILITY'].includes(right.assessment.status))throw Error('Both runs require completed review');
  for(const key of ['caseId','fixtureHash'])if(left[key]!==right[key])throw Error(`Unpaired ${key}`);
  for(const key of ['tool','model','environment','accountMode','availableTools']){
    if(JSON.stringify(left.capture.metadata[key])!==JSON.stringify(right.capture.metadata[key]))throw Error(`Unpaired ${key}`);
  }
  if(!left.capture.metadata.model||left.capture.metadata.model==='UNKNOWN')throw Error('Unknown model cannot support a controlled model comparison');
  if(left.capture.promptHash===right.capture.promptHash)throw Error('No prompt change to compare');
  return {status:'PAIRED_OBSERVATIONS_ONLY',left:left.assessment.status,right:right.assessment.status,claim:'One pair is not evidence of general superiority; aggregate independent repeats and a held-out suite.'};
}
