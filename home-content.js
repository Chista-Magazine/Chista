/* چیستا | فقط متن‌های داخل گیومه را تغییر دهید.
  نسخهٔ اصلی تصویر در صفحه ثابت می‌ماند. وقتی عنوانی را تغییر دهید،
  متن تازه به‌طور خودکار روی قسمت قدیمی قرار می‌گیرد.
  خانهٔ سؤال را با محتوای خودِ مقاله هماهنگ نگه دارید.
*/
window.CHISTA_HOME = {
  heroTitle: "چیستا",
  heroSubtitle: "از پرسش تا شناخت",
  heroTopics: "اندیشه، تاریخ، سیاست، استعمار و توسعه",
  featuredLabel: "پرسش هفته",
  featuredTitle: "چرا جوامع پس از استعمار به‌سختی توسعه می‌یابند؟",
  featuredDescription: "مروری بر میراث استعمار، نهادها و موانع توسعه در جهان امروز",
  featuredButton: "خواندن مقاله",
  pathHeading: "مسیرهای یادگیری",
  pathOne: "اندیشهٔ سیاسی",
  pathTwo: "استعمار و جهان معاصر",
  pathThree: "توسعه و نهادها",
  pathFour: "آزادی و حقوق انسان",
  libraryHeading: "کتابخانه",
  libraryDescription: "کتاب‌ها، مقاله‌های پژوهشی و منابع آموزشی (PDF)",
  pathwayHeading: "مسیر یادگیری",
  pathwayDescription: "مطالعهٔ مرحله به مرحله برای یادگیری عمیق‌تر",
  essaysHeading: "مقاله‌ها و تحلیل‌ها",
  essaysDescription: "نگاهی نو به مسائل مهم جامعه و جهان"
};

(function(){
  // For each region, only create a visible text layer if the corresponding text changed.
  // Nothing is drawn over the original image when the defaults are in use.
  const areas = {
    heroTitle: {className:'ov-hero-title'},
    heroSubtitle: {className:'ov-hero-subtitle'},
    heroTopics: {className:'ov-hero-topics'},
    featuredLabel: {className:'ov-feature-label'},
    featuredTitle: {className:'ov-feature-title'},
    featuredDescription: {className:'ov-feature-desc'},
    featuredButton: {className:'ov-feature-button'},
    pathHeading: {className:'ov-path-heading'},
    pathOne: {className:'ov-path-one'}, pathTwo: {className:'ov-path-two'},
    pathThree: {className:'ov-path-three'}, pathFour: {className:'ov-path-four'},
    libraryHeading: {className:'ov-library-heading'},
    libraryDescription: {className:'ov-library-desc'},
    pathwayHeading: {className:'ov-pathway-heading'},
    pathwayDescription: {className:'ov-pathway-desc'},
    essaysHeading: {className:'ov-essays-heading'},
    essaysDescription: {className:'ov-essays-desc'}
  };
  const original = {
    heroTitle:'چیستا', heroSubtitle:'از پرسش تا شناخت',
    heroTopics:'اندیشه، تاریخ، سیاست، استعمار و توسعه',
    featuredLabel:'پرسش هفته',
    featuredTitle:'چرا جوامع پس از استعمار به‌سختی توسعه می‌یابند؟',
    featuredDescription:'مروری بر میراث استعمار، نهادها و موانع توسعه در جهان امروز',
    featuredButton:'خواندن مقاله', pathHeading:'مسیرهای یادگیری',
    pathOne:'اندیشهٔ سیاسی',pathTwo:'استعمار و جهان معاصر',
    pathThree:'توسعه و نهادها',pathFour:'آزادی و حقوق انسان',
    libraryHeading:'کتابخانه',libraryDescription:'کتاب‌ها، مقاله‌های پژوهشی و منابع آموزشی (PDF)',
    pathwayHeading:'مسیر یادگیری',pathwayDescription:'مطالعهٔ مرحله به مرحله برای یادگیری عمیق‌تر',
    essaysHeading:'مقاله‌ها و تحلیل‌ها',essaysDescription:'نگاهی نو به مسائل مهم جامعه و جهان'
  };
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[data-edit]').forEach(function(el){
      let key=el.getAttribute('data-edit');let value=window.CHISTA_HOME[key];
      if(typeof value==='string'){el.textContent=value;if(value!==original[key] && el.closest('.mobile-mini'))el.closest('.mobile-mini').classList.add('has-custom-label');}
    });
    const parent=document.getElementById('chista-overlays');
    if(!parent)return;
    for(const [key,area] of Object.entries(areas)){
      const value=window.CHISTA_HOME[key];
      if(typeof value!=='string' || value===original[key])continue;
      const el=document.createElement('span');
      el.className='editable-surface '+area.className;
      el.textContent=value;
      el.setAttribute('dir','rtl');
      parent.appendChild(el);
    }
  });
})();
