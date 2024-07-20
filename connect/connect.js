


function openLink(path) {
    window.open(path, '_blank');
}


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 50,
  
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
  
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    });

    

});

  