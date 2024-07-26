document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 15,

        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 1,
            },
            1000: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            }
        },
    });
});