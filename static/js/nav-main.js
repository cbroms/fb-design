function transformMenuIcon(x){
        let opacityTarget = 0;
        let heightTarget = '80vh'
        let dispTarget = 'block'
        let time = 100;
        console.log('clicked')

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