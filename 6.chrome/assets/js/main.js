// Start marquee

// A $( document ).ready() block.
$( document ).ready(function() {
    $('.marquee_text').marquee({
        direction: 'left',
        duration: 100000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
    $('.marquee_text2').marquee({
        direction: 'leftright',
        duration: 100000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
    $('.nav').click(function() {
        $('.menu').toggleClass('showme');
      });
});


