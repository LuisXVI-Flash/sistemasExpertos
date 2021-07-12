
<script>
    window.onload = function() {
     
     
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Estadístico General"
        },
        subtitles: [{
            text: "Estadístico de resumen de diagnósticos"
        }],
        data: [{
            type: "pie",
            yValueFormatString: "#,##0\"%\"",
            indexLabel: "{label} ({y})",
            dataPoints: <?php echo json_encode($array, JSON_NUMERIC_CHECK); ?>
        }]
    });
    chart.render();
     
    }
    </script>
<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>