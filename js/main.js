$(document).ready(function () {
    $(".Banner-inner").owlCarousel({
        loop: true,
        margin: 100,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });  

    $(document).ready(function () {

        $(function () {
            $('#startDate').datepicker({
                format: 'dd/mm/yyyy'
            });
        });


    });
    $(document).ready(function () {

        $(function () {
            $('#startEnd').datepicker({
                format: 'dd/mm/yyyy'
            });
        });


    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    $('.return-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
    $("#testimonial-sliders").owlCarousel({
        loop: true,
        margin: 100,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});