$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";

    // // animate in 
    // $('.centered-head').animate({
    //     opacity: 1,
    //     top: '15vh'
    // }, 1500)
    // $('.project-tile').animate({
    //     opacity: 1
    // }, 500)
    // $('.dots').animate({
    //     opacity: 1
    // }, 1500)

     $('.projects').append("<div class='containter-fluid'></div>")
    // put panels in rows and cols 
    $('.project-tile').each(function(index){
        if (index % 3 == 0) {
            $('.containter-fluid').append("<div class='row'></div>")
        }
        let elt = $(this).detach()
        $('.row').last().append("<div class='col-sm-12 col-md-6 col-lg-4 align-self-center' id='" + index.toString() + "'></div>")
        $('#' + index.toString()).append(elt)
    })

    // on project panel click, animate out to page change and redirect
    $('.project-tile').click(function(e) {
        
        window.location.href = $(this).attr('id')
        return false;
    });
});
