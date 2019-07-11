var $badge = $('.about-site-badge');

$badge.waypoint(function(direction) {
    if (direction == 'down'){
       $badge.addClass('js-badge-animate');
    } else {
        $badge.removeClass('js-badge-animate');
    }
    console.log('waypoint');
}, { offset: '75%'});

