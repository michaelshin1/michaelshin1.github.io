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
    //design
    $('#calculate').click(function() {
        var fasta = $('#ncbi').val();
        fasta = fasta.replace(/\s+/g, '').replace(/\d+/g, '').replace(/B/g, '').replace(/D/g, '').replace(/E/g, '').replace(/F/g, '').replace(/H/g, '').replace(/I/g, '').replace(/J/g, '').replace(/K/g, '').replace(/L/g, '').replace(/M/g, '').replace(/N/g, '').replace(/O/g, '').replace(/P/g, '').replace(/Q/g, '').replace(/R/g, '').replace(/S/g, '').replace(/U/g, '').replace(/V/g, '').replace(/W/g, '').replace(/X/g, '').replace(/Y/g, '').replace(/Z/g, '').replace(/[^A-Z]+/g,'');
        var fastaArray = fasta.split('');
        window.alert(fastaArray);
    });
};
$(document).ready(main);