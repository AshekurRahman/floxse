;(function($) {
    $(document).ready(function() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            $({ countNum: $this.text() }).animate({ countNum: countTo }, {
                duration: 2000, // Duration of the countdown
                easing: 'swing', // Easing function
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
            });
        });
    });
})(jQuery);



var swiper = new Swiper(".partners__slider", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 0, // Continuous sliding
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    speed: 4000, // Slide speed in milliseconds
    simulateTouch: false, // Disable touch interaction
    allowTouchMove: false, // Disable slide dragging
    draggable: false, // Disable dragging on desktop
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});