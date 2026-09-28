let title = ['like JENNIE (Official)', 'like JENNIE (Performance)', 'Handlebars', 'ZEN (Official Music Video)']
const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 25,
    pagination: {
        el: '.tab-container',
        clickable: true,
        bulletClass:"tab",
        bulletActiveClass: "tab-active",
        renderBullet: function (index, className) {
            return `<li class="${className}">${title[index]}</li>`;
        },
    }
});