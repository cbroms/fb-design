$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";

    $('#project-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        easing: 'easeOutCubic',
        speed: 1500,
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.image-title').first().css('opacity', 1);

    // animate out prev title and animate in new title
    $('#project-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        let prevId = $(slick.$slides[currentSlide]).attr('id')
        let nextId = $(slick.$slides[nextSlide]).attr('id')
        let speed = (slick.options.speed) / 2
        let last = document.getElementById('title-' + prevId)
        let next = document.getElementById('title-' + nextId)

        $(last).animate({opacity: 0}, speed, function(){
            $(last).css('display', 'none');
            $(next).css('display', 'block')
            $(next).animate({opacity: 1}, speed)
        })
    });

    $('.image-title').click(function(){
         window.location.href = ($(this).attr('id')).split('title-')[1]
        return false;
    })

})