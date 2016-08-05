var main = function() {
    //animation
    $('.icon-menu').click(function() {
        $('.menu').animate({left: '0px'}, 200);
        $('body').animate({left: '285px'}, 200);
    });
    $('.icon-close').click(function() {
        $('.menu').animate({left: '-285px'}, 200);
        $('body').animate({left: '0px'}, 200);
    });
    //dropdown menu
    var calcCount = 0;
    $('#calculators').click(function() {
        if (calcCount % 2 === 0) {
            $('#calculators').after('<li id="crystal"><a href="crystalcalculator.html">- Crystal Conditions</a></li>');
            $('#calculators').after('<li id="primer"><a href="primer.html">- Primer Design</a></li>');
        }
        else {
            $('#crystal').remove();
            $('#primer').remove();
        }
        calcCount++;
    });
    /*
    $('#submit').click(function() {
        if($('#name').val() === '' || $('#return-contact').val() === '' || $('#message').val() === '') {
            window.alert('Please fill out all of the fields');
        } else {
            //PHP CODE
        }
    });
    */
};
$(document).ready(main);