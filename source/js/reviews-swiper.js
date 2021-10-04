var swiper = new Swiper('.review', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
            behavior: 'smooth',

        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
            behavior: 'smooth',
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 20,
            behavior: 'smooth',

        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 20,
            behavior: 'smooth',

        },
    }
});