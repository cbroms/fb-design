$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";
    // jekyll wraps all images in paragraph elements, so we want to remove 
    // the images from the paragraph wrapping
    const parents = $('p > img').parent();
    parents.each(function() {
     this.outerHTML = this.innerHTML
    });
    // consolidate elements from jekyll into various divs for styling
    // add a dummy element to the body to make wrapping easier later
    $('.body-text').prepend('<div></div>')
    $('.body-text').children().addClass('body-content')

    // wrap each element between images in a content wrapper 
    $('.body-content').each(function(index){
        let elms = $(this).nextUntil('img')
        if (elms[0] != undefined) {
            $('<div id="content-' + index.toString() + '" class="content-wrapper"></div>').insertBefore($(elms[0]))
            $('#content-' + index.toString()).append(elms)
        }
    });

    // consolidate the elements that have been wrapped into one single wrapper
    $($('.content-wrapper').get().reverse()).each(function(){
        if ($(this).parent().hasClass('content-wrapper')) {
            this.outerHTML = this.innerHTML
        }
    })

    // remove first dummy element
    $('.body-content').first().remove()

    // set up the grid system for the contents of the body
    $('.body-text').children().each(function(index){
        if (index == 0) { $('.body-text').append("<div class='row'></div>") }
            let elt = $(this).detach()
        if ($(elt).is('img')){
            elt = $(elt).addClass('img-fluid')
        }
        if (!$(elt).hasClass('big') && !$($(elt).children().first()).is('iframe')){
            if ($('.row').last().children().length > 1){
                $('.body-text').append("<div class='row'></div>")
            }
            $('.row').last().append("<div class='col-sm-12 col-lg-6 align-self-center' id='" + index.toString() + "'></div>")
            $('#' + index.toString()).append(elt)
            if ($(elt).is('img')){
                if ( $('#' + index.toString()).siblings().length == 0) {
                    $('#' + index.toString()).children().first().css({ float: 'right'})
                } else { $('#' + index.toString()).children().first().css({ float: 'left'}) }
            }
        } else {
            $('.body-text').append("<div class='row text-center'></div>")
            $('.row').last().append("<div class='col-sm-12 col-lg-12 align-self-center' id='" + index.toString() + "'></div>")
            $('#' + index.toString()).append(elt) 
            $('.body-text').append("<div class='row'></div>")
        }        
    })

    // when images are loaded, adjust the size of the project panel
    $(document).imagesLoaded(function(){  resizeAdjust() });
    // when window is resized, do the same
    $(window).resize(function(){ resizeAdjust() })

});

function resizeAdjust() {
    let currentHCont = window.innerHeight * 1.2
    let currentHBody = parseInt($('.body-text').css('height'))
    $('.container-main').css({height: (currentHCont + currentHBody).toString() + 'px'})
}

$(window).scroll(function() {
    if ($(window).scrollTop() > window.innerHeight) {
        $('body').css({backgroundColor: '#FCFCFC'})
        $('nav').css({backgroundColor: '#FCFCFC', textShadow: 'none' })
        $('.line').css({backgroundColor: '#202020'})
        $('nav a').css({color: '#202020'});
    } else {
        $('body').css({backgroundColor: '#202020'})
        $('nav').css({backgroundColor: 'transparent', textShadow: '0px 1px 30px rgba(0,0,0,0.4)'})
        $('.line').css({backgroundColor: '#FCFCFC'})
        $('nav a ').css({color: '#FCFCFC'});
    }
});