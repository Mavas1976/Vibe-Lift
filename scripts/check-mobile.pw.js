// Run with the Playwright browser_run_code_unsafe filename option and serve.mjs running.
async (page) => {
  const auditContext = await page.context().browser().newContext();
  page = await auditContext.newPage();
  const root = 'C:/dev/VIBE/site';
  const base = 'http://127.0.0.1:4173/';
  const routes = ['route','voorbeeld','tools','werkwijze','opdrachten','seo',
    ...Array.from({length:5},(_,i)=>`seo/${i+1}`),
    ...Array.from({length:14},(_,i)=>['uitleg','voorbeeld','opdracht','controle'].map(t=>`stap/${i+1}/${t}`)).flat()];
  const failures = [], runtimeErrors = [], samples = [];
  const onError = e => runtimeErrors.push(e.message);
  page.on('pageerror',onError);
  await page.goto(base);
  await page.reload();
  for (const fontScale of [1,2]) {
    for (const width of [320,360,390,540,768,1024,1440]) {
      await page.setViewportSize({width,height:844});
      for (const route of routes) {
        await page.evaluate(hash=>new Promise(resolve=>{
          if(location.hash===hash){resolve();return;}
          addEventListener('hashchange',()=>requestAnimationFrame(resolve),{once:true});
          location.hash=hash;
        }),'#'+route);
        await page.evaluate(async scale=>{
          document.documentElement.style.fontSize=`${scale*100}%`;
          document.querySelectorAll('details').forEach(e=>e.open=true);
          await document.fonts.ready;
        },fontScale);
        const result = await page.evaluate(()=>{
          const client = document.documentElement.clientWidth;
          const outside = [...document.querySelectorAll('main *,header *')].filter(e=>{
            const r=e.getBoundingClientRect();
            return r.width && (r.left < -1 || r.right > client+1);
          }).map(e=>({tag:e.tagName,css:e.className,text:e.textContent.slice(0,50)}));
          return {client,scroll:document.documentElement.scrollWidth,outside:outside.slice(0,8)};
        });
        samples.push({width,fontScale,route,client:result.client,scroll:result.scroll});
        if(result.scroll>result.client+1 || result.outside.length) failures.push({width,fontScale,route,...result});
      }
    }
  }
  const checks = [];
  const check = (condition,label) => {checks.push({label,pass:!!condition});if(!condition)failures.push({interaction:label});};
  await page.setViewportSize({width:390,height:844});
  await page.goto(base);
  await page.evaluate(()=>document.documentElement.style.fontSize='100%');
  const toggle=page.locator('.menu-toggle'), nav=page.locator('#primary-navigation');
  check(!await nav.isVisible(),'Mobile navigation starts collapsed');
  await toggle.click();
  check(await nav.isVisible() && await toggle.getAttribute('aria-expanded')==='true','Menu opens with correct accessible state');
  check(await page.locator('.header-link').isVisible(),'Assignment library remains accessible in menu');
  await nav.locator('a').first().focus();
  await page.keyboard.press('Escape');
  check(!await nav.isVisible() && await toggle.evaluate(e=>e===document.activeElement),'Escape closes menu and restores focus');
  await toggle.click();
  await nav.locator('[href="#tools"]').click();
  await page.waitForURL('**/#tools');
  check(!await nav.isVisible(),'Selecting a route closes menu');
  await page.setViewportSize({width:1440,height:900});
  await page.waitForFunction(()=>document.querySelector('.menu-toggle').hidden && !document.querySelector('#primary-navigation').hidden);
  check(await nav.isVisible() && !await toggle.isVisible(),'Resizing to desktop restores navigation');
  await page.setViewportSize({width:320,height:740});
  await page.goto(base+'#stap/1');
  await page.locator('#step-select').selectOption('7');
  await page.waitForURL('**/#stap/7');
  await page.waitForFunction(()=>document.title.startsWith('Stap 7 ·'));
  check(await page.locator('#step-select').inputValue()==='7','Mobile step selector navigates');
  await page.locator('#tab-uitleg').focus();
  await page.keyboard.press('ArrowRight');
  await page.waitForURL('**/#stap/7/voorbeeld');
  await page.waitForFunction(()=>document.querySelector('#tab-voorbeeld')?.getAttribute('aria-selected')==='true');
  check(await page.locator('#tab-voorbeeld').getAttribute('aria-selected')==='true','Lesson tabs retain keyboard operation');
  await page.goto(base+'#route');
  await page.locator('[data-view="list"]').click();
  check(await page.locator('.route-list .step-card').count()===14,'All fourteen steps accessible in list view');
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.reload();
  await page.waitForFunction(()=>document.querySelector('#motion-toggle').disabled);
  check(await page.locator('#motion-toggle').isDisabled(),'System reduced motion at page load disables decorative animation');
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.setViewportSize({width:390,height:400});
  await page.goto(base+'#stap/7/opdracht');
  if(!await page.locator('#project-goal').isVisible())await page.locator('#project-brief > summary').click();
  await page.locator('#project-goal').fill('Een workshopwebsite voor beginners.');
  await page.locator('#project-goal').evaluate(e=>e.scrollIntoView({behavior:'instant',block:'center'}));
  check(await page.locator('#project-goal').evaluate(e=>{const r=e.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight;}),'Project input reachable with short viewport');
  await page.reload();
  await page.locator('#project-brief').evaluate(e=>e.open=true);
  check(await page.locator('#project-goal').inputValue()==='Een workshopwebsite voor beginners.','Draft survives refresh');
  // Use a separate touch context so this synthetic test never overwrites a user draft.
  const touch=await page.context().browser().newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:3,permissions:['clipboard-read','clipboard-write']});
  try {
    const p=await touch.newPage();
    await p.goto(base+'#stap/1/opdracht');
    await p.locator('.menu-toggle').tap();
    check(await p.locator('#primary-navigation').isVisible(),'Touch opens mobile menu');
    await p.locator('.menu-toggle').tap();
    await p.locator('#project-goal').fill('SYNTHETIC mobiele audit: keramiekworkshops.');
    const card=p.locator('.composer-card').first();
    for(const field of await card.locator('[aria-required="true"]').all()) await field.fill('SYNTHETIC eigen projectinformatie voor de mobiele audit.');
    await card.locator('[data-composer-copy]').tap();
    await p.waitForFunction(()=>document.querySelector('#notice').textContent.includes('gekopieerd'));
    check((await p.evaluate(()=>navigator.clipboard.readText())).includes('SYNTHETIC mobiele audit'),'Touch copy includes filled project context');
    const sizing=await p.evaluate(()=>[...document.querySelectorAll('button,select,input,summary')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.height&&r.height<44;}).map(e=>e.outerHTML.slice(0,100)));
    check(sizing.length===0,'Visible mobile form controls have at least 44px height');
    await p.goto(base+'#route');
    await p.reload();
    await p.screenshot({path:root+'/docs/mobile-home.png'});
    await p.goto(base+'#stap/7/opdracht');
    await p.screenshot({path:root+'/docs/mobile-lesson.png'});
  } finally {await touch.close();}
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(base+'#route');
  await page.screenshot({path:root+'/docs/mobile-desktop-regression.png'});
  page.off('pageerror',onError);
  const report={status:failures.length||runtimeErrors.length?'FAIL':'PASS',generated_at:new Date().toISOString(),browser:'Chromium',routes:routes.length,layout_cases:samples.length,widths:[320,360,390,540,768,1024,1440],font_scales:[1,2],details:'All disclosure panels expanded during layout scan',touch:'390x844 / DPR 3 / Chromium emulation',checks,failures,runtimeErrors,samples,limitations:['No physical iOS/Android devices','No native Safari/WebKit or Firefox run','No screen-reader or accessibility certification','No field network/performance measurements']};
  await auditContext.close();
  return {...report,samples:undefined};
}
