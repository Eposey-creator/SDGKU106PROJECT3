var $slides = $('.slides');
var $slide = $('.slide1');
var count = 1;

$(document).ready(function () {

    setInterval(function () {

        $slides.animate({ 'margin-left': '-=68vw' }, 1200, function () {

            count++;
            if (count === 4) {
                $slides.css("margin-left", 0);
                count = 1;
            }

        });
    }, 4000);
});
