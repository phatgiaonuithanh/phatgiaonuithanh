/* MAIN NAVIGATION
----------------------------------------------------------------------------------------------------*/
(function() {

    function run() {

        if (Modernizr.mq('(max-width: 767px)')) {
            $('.page-nav').addClass('navbar-fixed-top');
        } else {
            $('.page-nav').removeClass('navbar-fixed-top');
        }
    }

    run();

    $(window).resize(function() {
        run();
    });

})();

/* OVERWRITE HTML
----------------------------------------------------------------------------------------------------*/
(function() {
    // $('.block-posts .date-posts .post-header').append('<div class="date-time"><i class="fa fa-calendar" aria-hidden="true"></i> </div>');
    // $('.block-posts .date-posts .post-header .date-time').append($('.block-posts .date-posts .post-footer .post-timestamp .timestamp-link').html());
    // $('.block-posts .date-posts .post-header .date-time').append(' <span class="date">' + $('.block-posts .date-header span').html() + '</span>');
    // $('.block-posts .date-posts .post-header').append(' <div class="categories"><i class="fa fa-folder-open-o" aria-hidden="true"></i> ' + $('.block-posts .date-posts .post-footer .post-labels').html().replace('Nhãn:', '') + '</div>');

    $('.main.section .date-posts .post-outer .post-thumbnail').each(function() {
        $(this).attr('style', 'background-image: url(' + $(this).find('img').attr('src') + ');');
        $(this).css('display', 'block');
    });

    if ($('.main.section .date-posts .post-outer .type-list').length) {

        $('.main.section .date-posts').css('margin', '0 -15px');

        $('.main.section .date-posts .post-outer ').css({
            'width': '50%',
            'float': 'left',
            'padding': '0 15px'
        });
    }
})();
