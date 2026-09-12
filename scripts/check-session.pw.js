// Run using browser_run_code_unsafe with the local site server available.
async (page) => {
  const context=await page.context().browser().newContext();
  const p=await context.newPage();
  const base='http://127.0.0.1:4173/';
  const checks=[],errors=[];
  p.on('pageerror',e=>errors.push(e.message));
  const check=(condition,label)=>{if(!condition)throw Error(label);checks.push(label);};
  const navigate=async hash=>{await p.goto(base+hash);await p.locator('#project-brief').waitFor();};
  try {
    await navigate('#opdrachten');
    const project={name:'Sessie <audit> & café',path:'C:/projecten/audit',goal:'Eerste regel\nTweede regel 🎨',audience:'Beginners'};
    for(const [key,value] of Object.entries(project))await p.locator('#project-'+key).fill(value);
    await navigate('#stap/2/opdracht');
    check(await p.locator('#project-brief').evaluate(e=>e.open),'Initially open project stays open after filling and navigating');
    await navigate('#opdrachten');
    const fields=await p.locator('[data-prompt-field]').evaluateAll(els=>els.map(e=>({id:e.id,select:e.tagName==='SELECT'})));
    await p.locator('.composer-card').evaluateAll(els=>els.forEach(e=>e.open=true));
    for(const f of fields){
      if(f.select)await p.locator('#'+f.id).selectOption({index:3});
      else await p.locator('#'+f.id).fill('Eigen '+f.id+'\n<tekst> & café');
    }
    const toolButtons=await p.locator('[data-prompt-tool]').evaluateAll(els=>els.filter((e,i,a)=>!a.slice(i+1).some(x=>x.dataset.promptTool===e.dataset.promptTool)).map(e=>({key:e.dataset.promptTool,tool:e.dataset.tool})));
    for(const t of toolButtons)await p.locator(`[data-prompt-tool="${t.key}"][data-tool="${t.tool}"]`).click();
    const expected=await p.locator('[data-project],[data-prompt-field]').evaluateAll(els=>Object.fromEntries(els.map(e=>[e.id,e.value])));
    await p.locator('#project-brief > summary').click();
    await p.waitForFunction(()=>!document.querySelector('#project-brief').open);
    await navigate('#stap/2/opdracht');
    check(await p.locator('#project-name').inputValue()===project.name,'Shared project survives step navigation');
    check(!await p.locator('#project-brief').evaluate(e=>e.open),'Closed project stays closed');
    await navigate('#seo/3');
    check(await p.locator('#project-goal').inputValue()===project.goal,'Multiline project survives SEO navigation');
    await navigate('#opdrachten');await p.reload();
    check(!await p.locator('#project-brief').evaluate(e=>e.open),'Closed project survives reload');
    const restored=await p.locator('[data-project],[data-prompt-field]').evaluateAll(els=>Object.fromEntries(els.map(e=>[e.id,e.value])));
    check(JSON.stringify(restored)===JSON.stringify(expected),`All ${fields.length} command fields and 4 project fields survive reload`);
    for(const t of toolButtons)check(await p.locator(`[data-prompt-tool="${t.key}"][data-tool="${t.tool}"]`).getAttribute('aria-pressed')==='true',`Tool choice ${t.key} restored`);
    const text=await p.locator('[data-preview="2"]').inputValue();
    check(text.includes(project.goal)&&text.includes(expected['input-2-question'])&&!text.includes('Eigen input-1-files'),'Generated prompt uses project and only its own saved answers');
    check((await p.locator('#project-status').innerText()).includes('4 van 4'),'Collapsed summary confirms saved project');
    const fresh=await context.newPage();await fresh.goto(base+'#opdrachten');
    check(await fresh.locator('#project-name').inputValue()==='','Independent new tab has no draft while original tab is filled');await fresh.close();
    await p.locator('#project-brief > summary').click();await p.reload();
    check(await p.locator('#project-brief').evaluate(e=>e.open),'Open project survives reload');
    await p.locator('[data-draft-clear]').click();await p.locator('[data-draft-cancel]').click();
    check(await p.locator('#project-name').inputValue()===project.name,'Cancel clear preserves input');
    await p.locator('[data-draft-clear]').click();await p.locator('[data-draft-confirm]').click();await p.reload();
    check(await p.locator('[data-project],[data-prompt-field]').evaluateAll(els=>els.every(e=>e.value==='')),'Confirmed clear removes all project and command input across reload');
    await p.setViewportSize({width:390,height:844});
    check(await p.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth),'Saved-state feedback fits mobile viewport');
    check(errors.length===0,'No browser runtime errors');
    for(const mode of ['denied','corrupt','clear-failed']){
      const edge=await page.context().browser().newContext();
      try{
        await edge.addInitScript(mode=>{
          const key='vibe-lift-project-tab-v1';
          if(mode==='denied')Object.defineProperty(window,'sessionStorage',{get(){throw Error('Denied');}});
          if(mode==='corrupt')sessionStorage.setItem(key,'{broken');
          if(mode==='clear-failed'){
            sessionStorage.setItem(key,JSON.stringify({version:1,project:{name:'Old draft',goal:'Saved goal'},prompts:{}}));
            Storage.prototype.removeItem=function(){throw Error('Denied');};
            Storage.prototype.setItem=function(){throw Error('Denied');};
          }
        },mode);
        const ep=await edge.newPage();await ep.goto(base+'#stap/1/opdracht');
        if(mode==='denied'){
          check((await ep.locator('#project-status').innerText()).includes('vernieuwen'),'Blocked storage warning visible immediately');
          await ep.locator('#project-name').fill('Memory draft');await ep.goto(base+'#stap/2/opdracht');
          check(await ep.locator('#project-name').inputValue()==='Memory draft','Blocked storage retains input during navigation');
        }else if(mode==='corrupt'){
          check((await ep.locator('#project-status').innerText()).includes('niet hersteld'),'Corrupt draft warning visible immediately');
          check(await ep.evaluate(()=>sessionStorage.getItem('vibe-lift-project-tab-v1'))==='{broken','Initial disclosure does not overwrite a failed restore');
        }else{
          await ep.locator('#project-brief > summary').click();
          await ep.locator('[data-draft-clear]').click();await ep.locator('[data-draft-confirm]').click();
          check((await ep.locator('#project-status').innerText()).includes('niet volledig'),'Failed clear has visible warning after rerender');
          check((await ep.locator('#notice').innerText()).includes('mislukt'),'Failed clear never reports success');
        }
      }finally{await edge.close();}
    }
    const report={status:'PASS',checks,fieldCount:fields.length,runtimeErrors:errors};
    return report;
  } finally {await context.close();}
}
