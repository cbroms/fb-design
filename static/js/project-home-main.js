$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";
    
    // create a unique set of tags for filtering the projects
    let tags = new Set()
    for (let i = 0; i < posts.length; i++) {
        for (let j = 0; j < posts[i].tags.length; j++) {
            tags.add(posts[i].tags[j])
        }
    }

    // add the tags to the selection options
    tags.forEach(function(v1, v2, s){
        $('#tag-selection').append('<option value="' + v1 + '">' + v1 + '</option>')
    })

    // event handler for input change 
    $('#tag-selection').change(function(e){
        let tag = $('#tag-selection').val()
        if (tag == 'All') {
            // animate all columns in
            $('.column').css({display: 'block'})
            $('.column').animate({maxWidth: '100%'}, {queue: false, duration: 1500})
            $('.column').animate({opacity: 1}, { duration: 500})
            //$('.column').animate({paddingLeft: '15px', paddingRight: '15px'}, { duration: 500})
        } else {
            let keepers = []
            // make a list of projects that have the tag 
            for (let i = 0; i < posts.length; i++) {
                for (let j = 0; j < posts[i].tags.length; j++) {
                    if (tag == posts[i].tags[j]){
                        keepers.push(posts[i].id)
                        break
                    }
                }
            } 
           $('.column').each(function(){
                let erase = true
                for (let id in keepers){
                    if ($(this).children().first().attr('id') == keepers[id]) {
                        erase = false
                    } 
                }
                // animate the columns in/out
                if (erase) {
                   // $(this).animate({paddingLeft: '0px', paddingRight: '0px'}, {queue: false, duration: 500})
                    $(this).animate({maxWidth: '0%'}, {queue: false, duration: 1000})
                    $(this).animate({opacity: 0}, { duration: 500})
                    let el = this
                    setTimeout(function(){$(el).css({display: 'none'})}, 1000)
                } else {
                    $(this).css({display: 'block'})
                    $(this).animate({opacity: 1}, {queue: false, duration: 500})
                    $(this).animate({maxWidth: '100%'}, { duration: 1000})
                   // $(this).animate({paddingLeft: '15px', paddingRight: '15px'}, { duration: 500})

                }
                
           })
        }

    })

    // add full size container
    $('.projects').append("<div class='containter-fluid'></div>")
    // put panels in rows and cols 
    $('.project-tile').each(function(index){
        if (index % 3 == 0) {
            $('.containter-fluid').append("<div class='row'></div>")
        }
        let elt = $(this).detach()
        $('.row').last().append("<div class='column col-sm-12 col-md-6 col-lg-4 align-self-center' id='" + index.toString() + "'></div>")
        $('#' + index.toString()).append(elt)
    })

    // on project panel click, animate out to page change and redirect
    $('.project-tile').click(function(e) {
        
        window.location.href = $(this).attr('id')
        return false;
    });
});
