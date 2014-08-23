    $('.nav a').click(function(){
        $('.nav .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $nav({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});