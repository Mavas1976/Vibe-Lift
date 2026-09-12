import assert from 'node:assert/strict';
import fs from 'node:fs';
import {moveParticle,startAirField} from '../dist/air.js';
let checks=0;
function check(value,note){assert.ok(value,note);checks++;}
const point=()=>({homeX:100,homeY:100,x:100,y:100,vx:0,vy:0,seed:0});
let p=point();moveParticle(p,{x:100,y:100,active:true},0,1);
check(Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.x>100,'Exact cursor overlap stays finite and repels');
p=point();p.x=280;p.y=230;
for(let i=0;i<300;i++)moveParticle(p,{x:0,y:0,active:false},0,1);
check(Math.abs(p.x-100)<.1&&Math.abs(p.y-114)<.1,'Particles return to their home field when cursor leaves');
for(let i=0;i<2000;i++)moveParticle(p,{x:i%400,y:i%600,active:true},i*33,3);
check(Number.isFinite(p.x)&&Number.isFinite(p.y)&&Math.abs(p.x)<1000&&Math.abs(p.y)<1000,'Bounded timesteps keep moving-pointer simulation stable');

function harness(initialReduced=false,finePointer=true){
 const handlers={},winHandlers={},toggleHandlers={},scheduled=new Map(),reduceHandlers={};
 let next=1,clears=0;
 const media={matches:initialReduced,addEventListener:(name,fn)=>reduceHandlers[name]=fn};
 const fine={matches:finePointer,addEventListener(){}};
 const ctx={clearRect(){clears++;},beginPath(){},arc(){},fill(){},setTransform(){}};
 const canvas={getContext:()=>ctx};
 const toggle={attrs:{},disabled:false,textContent:'',setAttribute(name,value){this.attrs[name]=value;},addEventListener:(name,fn)=>toggleHandlers[name]=fn};
 const doc={hidden:false,body:{classList:{toggle(){}}},querySelector:key=>key==='#air-field'?canvas:toggle,addEventListener:(name,fn)=>handlers[name]=fn};
 const win={innerWidth:1200,innerHeight:800,devicePixelRatio:3,matchMedia:q=>q.includes('reduced')?media:fine,requestAnimationFrame:fn=>{const id=next++;scheduled.set(id,fn);return id;},cancelAnimationFrame:id=>scheduled.delete(id),addEventListener:(name,fn)=>winHandlers[name]=fn};
 startAirField(doc,win);
 return {doc,win,canvas,toggle,handlers,winHandlers,toggleHandlers,media,reduceHandlers,scheduled,clears:()=>clears};
}
const h=harness();
check(h.scheduled.size===1,'One animation loop starts');
check(h.canvas.width===1800&&h.canvas.height===1200,'Pixel ratio capped at 1.5');
h.toggleHandlers.click();check(h.scheduled.size===0&&h.toggle.attrs['aria-pressed']==='true','Pause cancels the frame and communicates state');
h.toggleHandlers.click();check(h.scheduled.size===1,'Resume starts exactly one loop');
h.doc.hidden=true;h.handlers.visibilitychange();check(h.scheduled.size===0,'Hidden tabs stop animation');
h.doc.hidden=false;h.handlers.visibilitychange();check(h.scheduled.size===1,'Visible tabs resume');
h.media.matches=true;h.reduceHandlers.change();check(h.scheduled.size===0&&h.toggle.disabled,'New reduced-motion preference stops and disables animation');
const reduced=harness(true);check(reduced.scheduled.size===0&&reduced.clears()>0,'Initial reduced motion paints a static field without a frame loop');
startAirField({querySelector:()=>null},{});checks++;
const report={status:'PASS',checks,browser_qa:false,scope:'Numerical pointer response, origin recovery, stability, DPR, pause/resume, visibility, reduced motion and missing canvas'};
fs.writeFileSync(new URL('../docs/air-validation.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
