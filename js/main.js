$(document).ready(function() {
	/***************************************************
     * ANCORA
     ***************************************************/
    $('.ancora a').on('click', function(event) {
        
        var ancora = $(this).attr('href');
        var altura = $(ancora).offset().top;

        $('html, body').stop().animate({ scrollTop: altura }, 1000);
    });
});