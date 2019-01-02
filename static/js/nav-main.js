function transformMenuIcon(x){
    let opacityTarget = 0;
    let heightTarget = '80vh'
    let dispTarget = 'block'
    let time = 100;

    let go = function(elm){
        setTimeout(function(){ 
            $(elm).css({display: dispTarget})
            $(elm).animate({opacity: !opacityTarget}, 200)
        }, time)
        time += 100;
    }

    if ($(x).hasClass('change')){
        opacityTarget = 1;
        heightTarget = '0px'
        dispTarget = 'hidden'
        $($('.menu-item-small').get().reverse()).each(function() { go(this) })
        setTimeout(function(){ $('#content-wrapper').animate({opacity: opacityTarget}, 300) }, time )
    } else {
        $('.menu-item-small').each(function(){ go(this) })
        $('#content-wrapper').animate({opacity: opacityTarget}, 300)
    }

    $('#menu-small').css({display: dispTarget})
    $('#menu-small').animate({height: heightTarget}, 1000)

    x.classList.toggle("change");


}

// get scroll direction
$(document).on( 'DOMMouseScroll mousewheel', function ( event ) {
    if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
        //scroll down
        hideNav()
    } else {
        //scroll up
        revealNav()
    }
});
var ts;
$(document).bind('touchstart', function (e){
    ts = e.originalEvent.touches[0].clientY;
});

$(document).bind('touchend', function (e){
    let te = e.originalEvent.changedTouches[0].clientY;
    if (ts > te + 5) {
        // drag up
        hideNav()
    } else if (ts < te - 5) {
        // drag down
        revealNav()
    }
});

function hideNav() {
    if (document.documentElement.scrollHeight !== document.documentElement.clientHeight){
        $('nav').animate({top: '-110px'}, {duration: 1000, queue: false})
    }
    
}

function revealNav() {
    $('nav').animate({top: '0'}, {duration: 1000, queue: false})
}