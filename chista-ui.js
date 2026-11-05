/* Search, bookmark guide and moon/night mode for Chista. No tracking or external dependencies. */
(function(){
const searchItems=[
 ['پرسش هفته: چرا جوامع پس از استعمار به سختی توسعه می‌یابند؟','question.html','مقالهٔ کوتاه و مستقل'],
 ['مسیرهای یادگیری','paths.html','نقشهٔ سه‌مرحله‌ای یادگیری'],
 ['فانون و استعمار در ذهن و هویت','lesson-fanon.html','درس چهارلایه‌ای'],
 ['جزوهٔ فانون','library.html#fanon','کتابخانه · PDF'],
 ['توماس هابز','library.html#hobbes','کتابخانه · جزوه'],
 ['نقشهٔ جامع سیاسی و اجتماعی','paths.html','برنامهٔ سه‌مرحله‌ای'],
 ['مقاله‌ها و تحلیل‌ها','essays.html','نوشته‌ها و تحلیل‌های مستقل'],
 ['کتابخانه','library.html','جزوه‌ها و منابع پژوهشی']
];
let overlay=null, lastFocus=null;
function buildOverlay(){
 overlay=document.createElement('div');overlay.className='chista-modal-backdrop';
 overlay.innerHTML='<section class="chista-modal" role="dialog" aria-modal="true" aria-label="جست‌وجو در چیستا"><button class="chista-close" type="button" aria-label="بستن">×</button><h2 class="chista-modal-title">جست‌وجو در چیستا</h2><div class="chista-modal-body"></div></section>';
 document.body.append(overlay);
 overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.closest('.chista-close'))closeModal()});
 return overlay;
}
function closeModal(){if(!overlay)return;overlay.classList.remove('open');if(lastFocus)lastFocus.focus()}
function showSearch(){
 lastFocus=document.activeElement;const host=overlay||buildOverlay();
 host.querySelector('.chista-modal-title').textContent='جست‌وجو در چیستا';
 host.querySelector('.chista-modal-body').innerHTML='<input type="search" autocomplete="off" placeholder="فانون، هابز، استعمار، مقاله..." aria-label="جست‌وجو"><ul class="chista-results"></ul>';
 host.classList.add('open'); const input=host.querySelector('input'); const list=host.querySelector('.chista-results');
 function render(){const term=input.value.trim().toLocaleLowerCase('fa');const matches=searchItems.filter(item=>!term || (item[0]+' '+item[2]).toLocaleLowerCase('fa').includes(term));list.replaceChildren(); for(const [name,href,desc] of matches){let li=document.createElement('li'),a=document.createElement('a');a.href=href;const strong=document.createElement('strong');strong.textContent=name;let small=document.createElement('small');small.textContent=desc;a.append(strong,small);li.append(a);list.append(li);} if(!matches.length){let li=document.createElement('li');li.textContent='مطلبی پیدا نشد.';list.append(li);}}
 input.addEventListener('input',render);render();input.focus();
}
function showBookmark(){
 lastFocus=document.activeElement;const host=overlay||buildOverlay();
 host.querySelector('.chista-modal-title').textContent='ذخیرهٔ چیستا';
 host.querySelector('.chista-modal-body').innerHTML='<p>برای ذخیرهٔ چیستا در نشانک‌های مرورگر، در مک کلیدهای <strong>⌘ + D</strong> و در ویندوز <strong>Ctrl + D</strong> را بزنید.</p>';
 host.classList.add('open');host.querySelector('.chista-close').focus();
}
function toggleNight(){document.documentElement.classList.toggle('chista-night');try{localStorage.setItem('chista-night',document.documentElement.classList.contains('chista-night')?'yes':'no')}catch(e){}}
const iconSVG={search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',bookmark:'<path d="M6 3h12v18l-6-4-6 4V3z"/>',night:'<path d="M20 15.5A8 8 0 0 1 8.5 4 8.6 8.6 0 1 0 20 15.5z"/>'};
function controls(){const header=document.querySelector('.inner-header');if(!header)return; const tools=document.createElement('div');tools.className='chista-inner-tools';for(const [name,label] of [['search','جست‌وجو'],['bookmark','نشانک'],['night','حالت شب']]){const button=document.createElement('button');button.type='button';button.dataset.chistaAction=name;button.title=label;button.setAttribute('aria-label',label);button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+iconSVG[name]+'</svg>';tools.append(button);}header.append(tools);}
document.addEventListener('DOMContentLoaded',function(){
 try{if(localStorage.getItem('chista-night')==='yes')document.documentElement.classList.add('chista-night')}catch(e){}
 controls();document.querySelectorAll('[data-chista-action]').forEach(button=>{button.addEventListener('click',function(){let name=button.dataset.chistaAction;if(name==='search')showSearch();if(name==='bookmark')showBookmark();if(name==='night')toggleNight()})});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)){e.preventDefault();showSearch()}});
});
})();
