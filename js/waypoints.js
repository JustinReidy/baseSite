var $about = $('.about-me-waypoint')
var $badge = $('.about-site-waypoint');
var $projects = $('.project-waypoint')
var $contact = $('.contact-waypoint')


$badge.waypoint(function(direction) {
    if (direction == 'down'){
       $badge.addClass('js-badge-animate');
    } else {
        $badge.removeClass('js-badge-animate');
    }

}, { offset: '75%'});

