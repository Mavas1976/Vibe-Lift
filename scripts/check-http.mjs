import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const files=fs.readdirSync(dist,{recursive:true}).filter(f=>fs.statSync(path.join(dist,f)).isFile());
const results=[];
for(const file of files){
  const url='http://127.0.0.1:4173/'+file.replaceAll('\\','/');
  const response=await fetch(url,{signal:AbortSignal.timeout(10000)});
  const bytes=Buffer.from(await response.arrayBuffer());
  assert.equal(response.status,200,file);
  assert.ok(bytes.equals(fs.readFileSync(path.join(dist,file))),`HTTP bytes must match source: ${file}`);
  if(file.endsWith('.js'))assert.ok(response.headers.get('content-type').includes('javascript'));
  results.push({file,status:response.status,bytes:bytes.length,content_type:response.headers.get('content-type'),exact_content:true});
}
const missing=await fetch('http://127.0.0.1:4173/missing-file');assert.equal(missing.status,404);await missing.body.cancel();
const denied=await fetch('http://127.0.0.1:4173/',{method:'POST'});assert.equal(denied.status,405);await denied.body.cancel();
const report={status:'PASS',generated_at:new Date().toISOString(),base_url:'http://127.0.0.1:4173',assets:results,missing_file:404,unsupported_method:405,browser_qa:false};
fs.writeFileSync(path.join(root,'docs/http-validation.json'),JSON.stringify(report,null,2)+'\n');
console.log(`HTTP: ${results.length} files served with byte-for-byte source equality; 404 and 405 handled.`);
