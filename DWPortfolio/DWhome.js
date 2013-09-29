$(document).ready(function() { 

// scroll half-way to the right
$('#outerSlider').scrollLeft($('#innerSlider').width()/2 - $('#outerSlider').width()/2);

var direction = 1;
$('#outerSlider').mousemove(
    function (event) {
        var mouseXPercentage = event.clientX/ $(this).width() * 100;
        if (mouseXPercentage < 50) {
            direction = -1;

        } else if (mouseXPercentage > 50) {
            direction = 1;
        } else {
            direction = 0;
        }
    }
);

var doSlide = false;
var moveSlider = function () {
    var outerSlider = $('#outerSlider');
    outerSlider.scrollLeft(outerSlider.scrollLeft() + (direction * 5));
    if (doSlide) {
        requestAnimationFrame(moveSlider);
    }
};

$('#outerSlider').hover(
    // mouse enter    
    function () {       
        doSlide = true;    
        requestAnimationFrame(moveSlider);
    },
    // mouse exit
    function () {
        doSlide = false;
    }
);

  $(".scroll").click(function(event){       
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });

});