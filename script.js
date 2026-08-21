(()=>{
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const cleanPageUrl=()=>`${location.pathname}${location.search}`;
const scrollToSection=(targetId,focus=false)=>{const target=document.getElementById(targetId);if(!target)return;target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});if(focus){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true})}history.replaceState(null,'',cleanPageUrl())};
$$('[data-scroll-target]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();scrollToSection(link.dataset.scrollTarget,link.classList.contains('skip-link'))}));
const clearRequestedFragment=()=>{if(!location.hash)return;const requested=decodeURIComponent(location.hash.slice(1));requestAnimationFrame(()=>scrollToSection(requested))};
clearRequestedFragment();
addEventListener('hashchange',clearRequestedFragment);
const header=$('[data-header]'), menu=$('.menu-button'), nav=$('.site-nav');
const themeToggle=$('.theme-toggle'), themeMeta=$('meta[name="theme-color"]');
const syncThemeControl=()=>{const dark=document.documentElement.dataset.theme==='dark';themeToggle.setAttribute('aria-pressed',String(dark));themeToggle.setAttribute('aria-label',`Switch to ${dark?'light':'dark'} mode`);themeMeta.setAttribute('content',dark?'#050d18':'#ffffff')};
syncThemeControl();
themeToggle.addEventListener('click',event=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark',apply=()=>{document.documentElement.dataset.theme=next;try{localStorage.setItem('vaultwave-theme',next)}catch(e){}syncThemeControl()};document.documentElement.style.setProperty('--theme-x',`${event.clientX}px`);document.documentElement.style.setProperty('--theme-y',`${event.clientY}px`);if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.startViewTransition(apply);else apply()});
const setMenuState=open=>{menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);document.documentElement.classList.toggle('menu-open',open)};
menu.addEventListener('click',()=>setMenuState(menu.getAttribute('aria-expanded')!=='true'));
$$('.site-nav a').forEach(a=>a.addEventListener('click',()=>setMenuState(false)));
addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenuState(false);menu.focus()}});
document.addEventListener('pointerdown',event=>{if(menu.getAttribute('aria-expanded')==='true'&&!header.contains(event.target))setMenuState(false)});
addEventListener('resize',()=>{if(innerWidth>900)setMenuState(false)},{passive:true});
let lastHeaderScroll=scrollY,headerFrame=0;
const updateHeader=()=>{const current=Math.max(0,scrollY),hero=$('.hero'),pastHero=current>((hero?.offsetHeight||innerHeight)-80),goingDown=current>lastHeaderScroll+4,goingUp=current<lastHeaderScroll-4,menuOpen=menu.getAttribute('aria-expanded')==='true';header.classList.toggle('scrolled',current>40);if(!pastHero||goingUp||menuOpen)header.classList.remove('header-hidden');else if(goingDown)header.classList.add('header-hidden');lastHeaderScroll=current;headerFrame=0};
addEventListener('scroll',()=>{if(!headerFrame)headerFrame=requestAnimationFrame(updateHeader)},{passive:true});updateHeader();
$('[data-year]').textContent=new Date().getFullYear();

$$('img[data-media-retry]').forEach(image=>image.addEventListener('error',()=>{if(image.dataset.retryComplete)return;image.dataset.retryComplete='true';setTimeout(()=>{const source=new URL(image.src,location.href);source.searchParams.set('retry','20260820d');image.src=source.href},650)},{once:true}));

const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce){
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
  $$('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min((i%3)*70,140)}ms`;observer.observe(el)});
  const orb=$('.cursor-orb');addEventListener('pointermove',e=>{orb.style.left=e.clientX+'px';orb.style.top=e.clientY+'px'});$$('a,button,.benefit-card,.scope-cloud a').forEach(el=>{el.addEventListener('pointerenter',()=>orb.classList.add('active'));el.addEventListener('pointerleave',()=>orb.classList.remove('active'))});
}else $$('.reveal').forEach(el=>el.classList.add('visible'));

$$('.cap-item button').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.cap-item'),willOpen=!item.classList.contains('open');$$('.cap-item').forEach(i=>{i.classList.remove('open');const b=$('button',i);b.setAttribute('aria-expanded','false');$('.plus',i).textContent='+'});if(willOpen){item.classList.add('open');button.setAttribute('aria-expanded','true');$('.plus',item).textContent='−'}}));
$('.cap-item').classList.add('open');

const timeline=$('[data-timeline]'), progress=$('.timeline-progress');
const updateTimeline=()=>{const r=timeline.getBoundingClientRect(),start=innerHeight*.7,total=r.height-innerHeight*.3,p=Math.max(0,Math.min(1,(innerHeight*.7-r.top)/total));progress.style.height=(p*(r.height-60))+'px';$$('.step',timeline).forEach(s=>s.classList.toggle('active',s.getBoundingClientRect().top<innerHeight*.62))};
addEventListener('scroll',updateTimeline,{passive:true});updateTimeline();

const principleWheel=$('.principle-wheel');
if(principleWheel){
  principleWheel.addEventListener('pointermove',event=>{if(reduce)return;const box=principleWheel.getBoundingClientRect();principleWheel.style.setProperty('--mx',`${((event.clientX-box.left)/box.width-.5)*24}px`);principleWheel.style.setProperty('--my',`${((event.clientY-box.top)/box.height-.5)*24}px`)});
  principleWheel.addEventListener('pointerleave',()=>{principleWheel.style.setProperty('--mx','0px');principleWheel.style.setProperty('--my','0px')});
  $$('.principle',principleWheel).forEach(card=>{const activate=()=>{$$('.principle',principleWheel).forEach(item=>item.classList.remove('active'));card.classList.add('active')};card.addEventListener('click',activate);card.addEventListener('focus',activate)});
}

const introSection=$('.intro');
if(introSection&&!reduce){
  introSection.addEventListener('pointermove',event=>{const box=introSection.getBoundingClientRect(),x=(event.clientX-box.left)/box.width,y=(event.clientY-box.top)/box.height;introSection.style.setProperty('--intro-x',`${x*100}%`);introSection.style.setProperty('--intro-y',`${y*100}%`);introSection.style.setProperty('--intro-shift-x',`${(x-.5)*-22}px`);introSection.style.setProperty('--intro-shift-y',`${(y-.5)*-14}px`)});
  introSection.addEventListener('pointerleave',()=>{introSection.style.setProperty('--intro-x','72%');introSection.style.setProperty('--intro-y','38%');introSection.style.setProperty('--intro-shift-x','0px');introSection.style.setProperty('--intro-shift-y','0px')});
  const updateIntroPattern=()=>{const box=introSection.getBoundingClientRect(),progress=Math.max(-1,Math.min(1,(innerHeight/2-(box.top+box.height/2))/innerHeight));introSection.style.setProperty('--intro-scroll',`${progress*18}px`)};
  addEventListener('scroll',updateIntroPattern,{passive:true});updateIntroPattern();
}

const profileDrawer=$('#team-profile-drawer'), profileButtons=$$('[data-profile]'), profilePanels=$$('[data-profile-panel]'), profileClose=$('.profile-close');
const closeProfile=()=>{profileDrawer.classList.remove('open');profileButtons.forEach(button=>button.setAttribute('aria-expanded','false'));$$('[data-person]').forEach(card=>card.classList.remove('selected'))};
profileButtons.forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.profile,wasOpen=button.getAttribute('aria-expanded')==='true';if(wasOpen){closeProfile();return}profilePanels.forEach(panel=>{panel.hidden=panel.dataset.profilePanel!==key});profileButtons.forEach(item=>item.setAttribute('aria-expanded',String(item===button)));$$('[data-person]').forEach(card=>card.classList.toggle('selected',card.dataset.person===key));profileDrawer.classList.add('open');if(innerWidth<=700)setTimeout(()=>profileDrawer.scrollIntoView({behavior:reduce?'auto':'smooth',block:'nearest'}),120)}));
profileClose.addEventListener('click',closeProfile);

const productionCarousel=$('.production-carousel');
if(productionCarousel){
  const productionViewport=$('.production-viewport',productionCarousel), productionCards=$$('.production-card',productionCarousel), productionPrev=$('.production-prev',productionCarousel), productionNext=$('.production-next',productionCarousel), productionDots=$('.production-dots',productionCarousel), productionCount=$('[data-production-count]',productionCarousel);
  let activeProduction=1, productionInView=false, swipeStart=null, productionAudioEnabled=false;
  const formatProduction=value=>String(value).padStart(2,'0');
  productionCards.forEach((card,index)=>{
    const dot=document.createElement('button');dot.type='button';dot.className='production-dot';dot.setAttribute('role','tab');dot.setAttribute('aria-label',`View production ${index+1}`);dot.addEventListener('click',()=>activateProduction(index,true));productionDots.append(dot);
    const video=$('video',card);video.addEventListener('loadeddata',()=>card.classList.add('video-loaded'),{once:true});video.addEventListener('play',()=>card.classList.remove('is-paused'));video.addEventListener('pause',()=>card.classList.add('is-paused'));$$('.video-actions button',card).forEach(button=>button.title=button.getAttribute('aria-label'));
    card.addEventListener('click',event=>{if(!event.target.closest('.video-actions')&&index!==activeProduction)activateProduction(index,true)});
    $('.video-toggle',card).addEventListener('click',event=>{event.stopPropagation();if(index!==activeProduction){activateProduction(index,true);return}if(video.paused)playActiveProduction();else video.pause()});
    $('.audio-toggle',card).addEventListener('click',event=>{event.stopPropagation();if(index!==activeProduction){activateProduction(index,true);return}productionAudioEnabled=!productionAudioEnabled;video.muted=!productionAudioEnabled;syncProductionAudio();if(video.paused)playActiveProduction()});
  });
  const dots=$$('.production-dot',productionDots);
  function syncProductionAudio(){productionCards.forEach((card,index)=>{const video=$('video',card),button=$('.audio-toggle',card),icon=$('use',button),on=index===activeProduction&&productionAudioEnabled;video.muted=!on;button.classList.toggle('sound-on',on);button.setAttribute('aria-pressed',String(on));button.setAttribute('aria-label',`${on?'Turn sound off for':'Turn sound on for'} ${$('h3',card).textContent}`);button.title=button.getAttribute('aria-label');icon?.setAttribute('href',on?'#icon-volume-on':'#icon-volume-off')})}
  function playActiveProduction(){
    const card=productionCards[activeProduction],video=$('video',card),toggle=$('.video-toggle',card);if(!productionInView)return;if(!video.getAttribute('src')){video.src=video.dataset.src;video.preload='metadata';video.load()}video.muted=!productionAudioEnabled;video.playsInline=true;const promise=video.play();if(promise)promise.then(()=>{card.classList.remove('is-paused');toggle.setAttribute('aria-label',`Pause ${$('h3',card).textContent} video`)}).catch(()=>{video.muted=true;productionAudioEnabled=false;syncProductionAudio();const mutedPlay=video.play();if(mutedPlay)mutedPlay.catch(()=>{});card.classList.add('is-paused');toggle.setAttribute('aria-label',`Play ${$('h3',card).textContent} video`)})
  }
  function activateProduction(nextIndex,userInitiated=false){
    activeProduction=(nextIndex+productionCards.length)%productionCards.length;const mobile=matchMedia('(max-width:900px)').matches,spacing=mobile?96:108;
    productionCards.forEach((card,index)=>{let offset=index-activeProduction;if(offset>productionCards.length/2)offset-=productionCards.length;if(offset< -productionCards.length/2)offset+=productionCards.length;const distance=Math.abs(offset),active=offset===0;card.style.setProperty('--x',`${offset*spacing}%`);card.classList.toggle('is-active',active);card.classList.toggle('is-side',distance===1);card.classList.toggle('is-hidden',distance>1);card.setAttribute('aria-hidden',String(distance>1));$$('.video-actions button',card).forEach(button=>button.tabIndex=active?0:-1);if(!active){const video=$('video',card);if(!video.paused)video.pause()}});
    dots.forEach((dot,index)=>{const current=index===activeProduction;dot.classList.toggle('active',current);dot.setAttribute('aria-selected',String(current));dot.tabIndex=current?0:-1});productionCount.textContent=`${formatProduction(activeProduction+1)} / ${formatProduction(productionCards.length)}`;syncProductionAudio();playActiveProduction();if(userInitiated)productionViewport.focus({preventScroll:true})
  }
  productionPrev.addEventListener('click',()=>activateProduction(activeProduction-1,true));productionNext.addEventListener('click',()=>activateProduction(activeProduction+1,true));
  productionViewport.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();activateProduction(activeProduction-1,true)}if(event.key==='ArrowRight'){event.preventDefault();activateProduction(activeProduction+1,true)}});
  productionViewport.addEventListener('pointerdown',event=>{swipeStart={x:event.clientX,y:event.clientY,id:event.pointerId};productionViewport.setPointerCapture?.(event.pointerId)});
  productionViewport.addEventListener('pointerup',event=>{if(!swipeStart)return;const dx=event.clientX-swipeStart.x,dy=event.clientY-swipeStart.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.2)activateProduction(activeProduction+(dx<0?1:-1),true);swipeStart=null});productionViewport.addEventListener('pointercancel',()=>swipeStart=null);
  const productionObserver=new IntersectionObserver(entries=>{productionInView=entries[0].isIntersecting&&entries[0].intersectionRatio>.18;if(productionInView)playActiveProduction();else productionCards.forEach(card=>$('video',card).pause())},{threshold:[0,.18,.4]});productionObserver.observe(productionCarousel);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)productionCards.forEach(card=>$('video',card).pause());else if(productionInView)playActiveProduction()});
  addEventListener('resize',()=>activateProduction(activeProduction),{passive:true});activateProduction(activeProduction);
}
})();
