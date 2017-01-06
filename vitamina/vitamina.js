var main = function() {
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    $('#filter1').click(function() {
        $('#filter1').toggleClass('unfilter');
        $('#caption1').toggleClass('invisible');
    });
    $('#caption1').click(function() {
        $('#filter1').toggleClass('unfilter');
        $('#caption1').toggleClass('invisible');
    });
    $('#filter2').click(function() {
        $('#filter2').toggleClass('unfilter');
        $('#caption2').toggleClass('invisible');
    });
    $('#caption2').click(function() {
        $('#filter2').toggleClass('unfilter');
        $('#caption2').toggleClass('invisible');
    });
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ["Study", "Mortality", { role: "style" } ],
            ["IDN-1 1988", -34, "#497ABE"],
            ["IDN-2 1988", -45, "#497ABE"],
            ["India 1990", -54, "#497ABE"],
            ["Nepal-1 1991", -30, "#497ABE"],
            ["Nepal-2 1991", -29, "#497ABE"],
            ["Ghana 1992", -19, "#497ABE"]
        ]);
        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                        { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                        2]);
        var options = {
            title: "Vitamin A supplementation on child mortality",
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
            vAxis: {
                title: 'Percent Mortality Change',
            },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }
};
$(document).ready(main);