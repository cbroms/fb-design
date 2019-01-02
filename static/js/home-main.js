$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";

    $('.image-slide').first().addClass('current')


    setInterval(function(){
        $('.image-slide').each(function(){
            console.log(this)
            let cur = $(this).find('.current').removeClass('current');
            let next = $(cur).next().length ? $(cur).next() : $(this).children().eq(0);
            $(next).addClass('current');
            $(cur).animate({width: '0vw'}, 1500)
            $(next).animate({width: '100vw'}, 1500)

        })
    }, 3000)

})