/* چیستا — متن‌های قابل ویرایش صفحهٔ اصلی
   برای تغییر یک عنوان، فقط نوشتهٔ داخل گیومه را عوض کنید.
   رنگ‌ها و تصاویر در style.css هستند؛ لازم نیست دستشان بزنید.
*/
window.CHISTA_HOME = {
  heroTitle: "چیستا",
  heroSubtitle: "از پرسش تا شناخت",
  heroTopics: "اندیشه، تاریخ، سیاست، استعمار و توسعه",
  featuredLabel: "پرسش هفته",
  featuredTitle: "چرا جوامع پس از استعمار به‌سختی توسعه می‌یابند؟",
  featuredDescription: "چند مسیر برای اندیشیدن به میراث استعمار، نهادها و توسعه؛ بدون پاسخ از پیش تعیین‌شده",
  featuredButton: "خواندن این مطلب",
  pathHeading: "مسیرهای یادگیری",
  pathOne: "اندیشهٔ سیاسی",
  pathTwo: "استعمار و جهان معاصر",
  pathThree: "توسعه و نهادها",
  pathFour: "آزادی و حقوق انسان",
  libraryHeading: "کتابخانه",
  libraryDescription: "جزوه‌ها، کتاب‌ها و منابع پژوهشی",
  pathwayHeading: "مسیر یادگیری",
  pathwayDescription: "دوره‌های منظم، از مبانی تا تحلیل",
  essaysHeading: "مقاله‌ها و تحلیل‌ها",
  essaysDescription: "نوشته‌های مستقل و مستند"
};
window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-edit]').forEach(function(el) {
    const value=window.CHISTA_HOME[el.getAttribute('data-edit')];
    if (typeof value==='string') el.textContent=value;
  });
});
