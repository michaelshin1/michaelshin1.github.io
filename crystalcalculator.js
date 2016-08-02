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
    //calculator
    $('#calculate').click(function() {
        var totalVol = parseFloat($('#volInput').val());
        var percipitantStock = parseFloat($('#percipitant').val());
        var saltStock = parseFloat($('#salt').val());
        var bufferStock = parseFloat($('#buffer').val());
        var goalBuffer = parseFloat($('#goalBuffer').val());
        var rowA = parseFloat($('#row-a').val());
        var rowB = parseFloat($('#row-b').val());
        var rowC = parseFloat($('#row-c').val());
        var rowD = parseFloat($('#row-d').val());
        var col1 = parseFloat($('#col-1').val());
        var col2 = parseFloat($('#col-2').val());
        var col3 = parseFloat($('#col-3').val());
        var col4 = parseFloat($('#col-4').val());
        var col5 = parseFloat($('#col-5').val());
        var col6 = parseFloat($('#col-6').val());
        if (isNaN(totalVol) || isNaN(percipitantStock) || isNaN(saltStock) || isNaN(bufferStock) || isNaN(goalBuffer) || isNaN(rowA) || isNaN(rowB) || isNaN(rowC) || isNaN(rowD) || isNaN(col1) || isNaN(col2) || isNaN(col3) || isNaN(col4) || isNaN(col5) || isNaN(col6)) {
            window.alert("Please enter a valid value");
        } else {
            var buffer = goalBuffer * totalVol / bufferStock;
            var rowAsalt = rowA * totalVol / saltStock;
            var rowBsalt = rowB * totalVol / saltStock;
            var rowCsalt = rowC * totalVol / saltStock;
            var rowDsalt = rowD * totalVol / saltStock;
            var col1percipitant = col1 * totalVol / percipitantStock;
            var col2percipitant = col2 * totalVol / percipitantStock;
            var col3percipitant = col3 * totalVol / percipitantStock;
            var col4percipitant = col4 * totalVol / percipitantStock;
            var col5percipitant = col5 * totalVol / percipitantStock;
            var col6percipitant = col6 * totalVol / percipitantStock;
            if (totalVol - buffer - rowAsalt - col1percipitant < 0 || totalVol - buffer - rowAsalt - col6percipitant < 0 || totalVol - buffer - rowDsalt - col1percipitant < 0 || totalVol - buffer - rowDsalt - col6percipitant < 0) {
                window.alert('Please further concentrate your stocks or decrease concentration of crystal conditions');
            } else {
                $('.3').text(buffer.toFixed(3));
                $('.asalt').text(rowAsalt.toFixed(3));
                $('.bsalt').text(rowBsalt.toFixed(3));
                $('.csalt').text(rowCsalt.toFixed(3));
                $('.dsalt').text(rowDsalt.toFixed(3));
                $('.col-1-p').text(col1percipitant.toFixed(3));
                $('.col-2-p').text(col2percipitant.toFixed(3));
                $('.col-3-p').text(col3percipitant.toFixed(3));
                $('.col-4-p').text(col4percipitant.toFixed(3));
                $('.col-5-p').text(col5percipitant.toFixed(3));
                $('.col-6-p').text(col6percipitant.toFixed(3));
                $('#a1water').text((totalVol - buffer - rowAsalt - col1percipitant).toFixed(3));
                $('#a2water').text((totalVol - buffer - rowAsalt - col2percipitant).toFixed(3));
                $('#a3water').text((totalVol - buffer - rowAsalt - col3percipitant).toFixed(3));
                $('#a4water').text((totalVol - buffer - rowAsalt - col4percipitant).toFixed(3));
                $('#a5water').text((totalVol - buffer - rowAsalt - col5percipitant).toFixed(3));
                $('#a6water').text((totalVol - buffer - rowAsalt - col6percipitant).toFixed(3));
                $('#b1water').text((totalVol - buffer - rowBsalt - col1percipitant).toFixed(3));
                $('#b2water').text((totalVol - buffer - rowBsalt - col2percipitant).toFixed(3));
                $('#b3water').text((totalVol - buffer - rowBsalt - col3percipitant).toFixed(3));
                $('#b4water').text((totalVol - buffer - rowBsalt - col4percipitant).toFixed(3));
                $('#b5water').text((totalVol - buffer - rowBsalt - col5percipitant).toFixed(3));
                $('#b6water').text((totalVol - buffer - rowBsalt - col6percipitant).toFixed(3));
                $('#c1water').text((totalVol - buffer - rowCsalt - col1percipitant).toFixed(3));
                $('#c2water').text((totalVol - buffer - rowCsalt - col2percipitant).toFixed(3));
                $('#c3water').text((totalVol - buffer - rowCsalt - col3percipitant).toFixed(3));
                $('#c4water').text((totalVol - buffer - rowCsalt - col4percipitant).toFixed(3));
                $('#c5water').text((totalVol - buffer - rowCsalt - col5percipitant).toFixed(3));
                $('#c6water').text((totalVol - buffer - rowCsalt - col6percipitant).toFixed(3));
                $('#d1water').text((totalVol - buffer - rowDsalt - col1percipitant).toFixed(3));
                $('#d2water').text((totalVol - buffer - rowDsalt - col2percipitant).toFixed(3));
                $('#d3water').text((totalVol - buffer - rowDsalt - col3percipitant).toFixed(3));
                $('#d4water').text((totalVol - buffer - rowDsalt - col4percipitant).toFixed(3));
                $('#d5water').text((totalVol - buffer - rowDsalt - col5percipitant).toFixed(3));
                $('#d6water').text((totalVol - buffer - rowDsalt - col6percipitant).toFixed(3));
            }
        }
    });
    $('#clear').click(function() {
        $("form").trigger('reset');
        $('#row-a, #row-b, #row-c, #row-d').val('');
        $('#col-1, #col-2, #col-3, #col-4, #col-5, #col-6').val('');
    });
};

$(document).ready(main);