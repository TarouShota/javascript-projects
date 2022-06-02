import Chart from './highcharts/es-modules/Core/Chart/Chart.js';
import LineSeries from './highcharts/es-modules/Series/Line/LineSeries.js';
// Example to create a simple line chart in a div#container:
const myChart = new Chart('container', {
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
});