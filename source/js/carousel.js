var swiper = new Swiper('.myCarousel', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: "auto",
            spaceBetween: 30,

        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30,

        },
        1920: {
            slidesPerView: 5,
            spaceBetween: 20,

        },
    }
});