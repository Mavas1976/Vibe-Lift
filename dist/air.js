// A decorative field; no input is stored or transmitted.
export function moveParticle(p, pointer, time, dt) {
  const ox=p.homeX+Math.sin(time*.00024+p.seed)*10;
  const oy=p.homeY+Math.cos(time*.00019+p.seed)*14;
  const dx=p.x-pointer.x,dy=p.y-pointer.y,dist=Math.hypot(dx,dy);
  let fx=(ox-p.x)*.025,fy=(oy-p.y)*.025;
  if(pointer.active && dist<150){const force=(1-dist/150)*1.5;fx+=(dist>0?dx/dist:1)*force;fy+=(dist>0?dy/dist:0)*force;}
  p.vx=(p.vx+fx*dt)*Math.pow(.87,dt);p.vy=(p.vy+fy*dt)*Math.pow(.87,dt);
  p.x+=p.vx*dt;p.y+=p.vy*dt;
  return p;
}

export function startAirField(doc=document, win=window) {
  const canvas=doc.querySelector('#air-field'),toggle=doc.querySelector('#motion-toggle');
  const ctx=canvas?.getContext?.('2d');
  if(!ctx || !toggle || !win.matchMedia || !win.requestAnimationFrame)return;
  const reduce=win.matchMedia('(prefers-reduced-motion: reduce)');
  const fine=win.matchMedia('(hover: hover) and (pointer: fine)');
  const pointer={x:0,y:0,active:false};
  let particles=[],width=0,height=0,frame=0,last=0,paused=reduce.matches;
  const running=()=>!paused&&!reduce.matches&&!doc.hidden;
  function syncButton(){
    const stopped=paused||reduce.matches;
    toggle.setAttribute('aria-pressed',String(stopped));
    toggle.textContent=reduce.matches?'Beweging uit · systeem':stopped?'Beweging aan':'Beweging pauzeren';
    toggle.disabled=reduce.matches;
    doc.body.classList.toggle('motion-paused',stopped);
  }
  function paint(time=0,dt=0){
    ctx.clearRect(0,0,width,height);
    for(const p of particles){
      if(dt)moveParticle(p,pointer,time,dt);
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();
    }
  }
  function resize(){
    width=Math.max(1,win.innerWidth);height=Math.max(1,win.innerHeight);
    const ratio=Math.min(win.devicePixelRatio||1,1.5);
    canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);
    const count=Math.min(fine.matches?380:100,Math.round(width*height/2400));
    particles=Array.from({length:count},(_,i)=>{
      const seed=i*2.399963,unit=(i+.5)/count;
      const x=(Math.sin(seed*7.31)*.5+.5)*width;
      const y=unit*height;
      return {homeX:x,homeY:y,x,y,vx:0,vy:0,seed,r:i%9===0?1.65:.8,color:i%7===0?'rgba(176,123,87,.24)':'rgba(58,95,139,.22)'};
    });
    pointer.active=false;paint();
  }
  function tick(time){
    frame=0;if(!running())return;
    if(time-last>=32){paint(time,last?Math.min((time-last)/16.667,3):1);last=time;}
    frame=win.requestAnimationFrame(tick);
  }
  function schedule(){if(frame)win.cancelAnimationFrame(frame);frame=0;last=0;pointer.active=false;syncButton();if(running())frame=win.requestAnimationFrame(tick);else paint();}
  toggle.addEventListener('click',()=>{paused=!paused;schedule();});
  win.addEventListener('pointermove',e=>{if(fine.matches&&running()&&e.pointerType!=='touch'){pointer.x=e.clientX;pointer.y=e.clientY;pointer.active=true;}},{passive:true});
  doc.addEventListener('pointerleave',()=>{pointer.active=false;});
  win.addEventListener('blur',()=>{pointer.active=false;});
  win.addEventListener('resize',resize,{passive:true});
  doc.addEventListener('visibilitychange',schedule);
  reduce.addEventListener('change',schedule);fine.addEventListener('change',resize);
  resize();schedule();
}
