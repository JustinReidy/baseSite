var $about = $('.about-me-waypoint')
var $badge = $('.about-site-waypoint');
var $projects = $('.project-waypoint')
var $contact = $('.contact-waypoint')

$about.waypoint(function(direction) {
    if (direction == 'down'){
       $about.addClass('js-badge-animate');
    } else {
        $about.removeClass('js-badge-animate');
    }

}, { offset: '75%'});

$badge.waypoint(function(direction) {
    if (direction == 'down'){
       $badge.addClass('js-badge-animate');
    } else {
        $badge.removeClass('js-badge-animate');
    }

}, { offset: '75%'});

$projects.waypoint(function(direction) {
    if (direction == 'down'){
       $projects.addClass('js-badge-animate');
    } else {
        $projects.removeClass('js-badge-animate');
    }

}, { offset: '75%'});

$contact.waypoint(function(direction) {
    if (direction == 'down'){
       $contact.addClass('js-badge-animate');
    } else {
        $contact.removeClass('js-badge-animate');
    }

}, { offset: '75%'});