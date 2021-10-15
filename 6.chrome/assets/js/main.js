// Start marquee

// A $( document ).ready() block.
$( document ).ready(function() {
    $('.marquee_text').marquee({
        direction: 'left',
        duration: 50000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
});


