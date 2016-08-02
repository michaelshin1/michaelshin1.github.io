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
    //dropdown menus
    var projectsCount = 0;
    $('#projects').click(function() {
        if (projectsCount % 2 === 0) {
            $('#projects').after('<li id="research"><a href="#">- Research</a></li>');
            $('#projects').after('<li id="website"><a href="#">- Website</a></li>');
        }
        else {
            $('#research').remove();
            $('#website').remove();
        }
        projectsCount++;
    });
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
};
$(document).ready(main);