var indexjs = (function(){
  "use strict";
  console.log('-- Happy Coding!! --');

  var chartInfo = {
    barChart : null,
    horizontalBarChart : null,
    lineChart : null,
    radarChart : null,
    polarAreaChart : null,
    pieChart : null,
    doughnutChart : null,
    bubbleChart : null
  }

  function indexjs() {
    indexjs.init();
  }

  indexjs.init = function() {
    chartInfo.barChart = indexjs.setBarChart();
    chartInfo.horizontalBarChart = indexjs.setHorizontalBarChart();
    chartInfo.lineChart = indexjs.setLineChart();
    chartInfo.radarChart = indexjs.setRadarChart();
    chartInfo.polarAreaChart = indexjs.setPolarAreaChart();
    chartInfo.pieChart = indexjs.setPieChart();
    chartInfo.doughnutChart = indexjs.setDoughnutChart();
    chartInfo.bubbleChart = indexjs.setBubbleChart();
  }

  indexjs.updateChartData = function() {
    // BarChart
    chartInfo.barChart.data.datasets[0].data = indexjs.getDemoData(12);
    chartInfo.barChart.update();
    // horizontalBarChart
    chartInfo.horizontalBarChart.data.datasets[0].data = indexjs.getDemoData(12);
    chartInfo.horizontalBarChart.update();
    // lineChart
    chartInfo.lineChart.data.datasets[0].data = indexjs.getDemoData(12);
    chartInfo.lineChart.update();
    // radarChart
    chartInfo.radarChart.data.datasets[0].data = indexjs.getDemoData(12);
    chartInfo.radarChart.update();
    // polarAreaChart
    chartInfo.polarAreaChart.data.datasets[0].data = indexjs.getDemoData(12);
    chartInfo.polarAreaChart.update();
    // pieChart
    chartInfo.pieChart.data.datasets[0].data = indexjs.getDemoData(3);
    chartInfo.pieChart.update();
    // doughnutChart
    chartInfo.doughnutChart.data.datasets[0].data = indexjs.getDemoData(3);
    chartInfo.doughnutChart.update();
    // bubbleChart
    chartInfo.bubbleChart.data.datasets[0].data = indexjs.getDemoBobbleData(20);
    chartInfo.bubbleChart.update();
  }

  indexjs.getDemoLabels = function() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }

  indexjs.getDemoData = function(dataCnt) {
    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

    var data = [];
    for (var i = 0; i < dataCnt; i++) {
      data.push(randomScalingFactor());
    }
    return data;
  }

  indexjs.getDemoBobbleData = function(dataCnt) {
    var randomScalingFactor = function(){ return Math.round(Math.random()*10)};

    var data = [{}];
    for (var i = 0; i < dataCnt; i++) {
      data.push({
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: randomScalingFactor()
      });
    }
    return data;
  }

  indexjs.getDemoColors = function() {
    var colors = [];
    for (var i = 0; i < 12; i++) {
      // colors.push('rgba(54, 162, 235, 1)');
      colors.push('#46BFBD');
    }
    return colors;
  }

  indexjs.setBarChart = function() {
    var ctx = document.getElementById("myBarChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: indexjs.getDemoLabels(),
        datasets: [{
          label: 'Sample',
          data: indexjs.getDemoData(12),
          backgroundColor: indexjs.getDemoColors(),
          borderColor: indexjs.getDemoColors(),
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Bar Chart'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });

    return myChart;
  }

  indexjs.setHorizontalBarChart = function() {
    var ctx = document.getElementById("myHorizontalBarChart");
    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: indexjs.getDemoLabels(),
        datasets: [{
          label: 'Sample',
          data: indexjs.getDemoData(12),
          backgroundColor: indexjs.getDemoColors(),
          borderColor: indexjs.getDemoColors(),
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Horizontal Bar Chart'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });

    return myChart;
  }

  indexjs.setLineChart = function() {
    var ctx = document.getElementById("myLineChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: indexjs.getDemoLabels(),
        datasets: [{
          label: 'Sample',
          data: indexjs.getDemoData(12),
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false
        }]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Line Chart'
        },
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      }
    });

    return myChart;
  }

  indexjs.setRadarChart = function() {
    var ctx = document.getElementById("myRadarChart");
    var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: indexjs.getDemoLabels(),
        datasets: [{
          label: 'Sample1',
          data: indexjs.getDemoData(12),
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "rgba(75,192,192,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(75,192,192,1)",
        },{
          label: 'Sample2',
          data: indexjs.getDemoData(12),
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
        }]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Radar Chart'
        },
        scale: {
          reverse: true,
          ticks: {
            beginAtZero: true
          }
        }
      }
    });

    return myChart;
  }

  indexjs.setPolarAreaChart = function() {
    var ctx = document.getElementById("myPolarAreaChart");
    var myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: [
          "Red",
          "Green",
          "Yellow",
          "Grey",
          "Blue"
        ],
        datasets: [{
          label: 'Sample1',
          data: indexjs.getDemoData(5),
          backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
          ],
          label: 'My dataset' // for legend
        }],
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Polar Area Chart'
        },
        elements: {
          arc: {
            borderColor: "#000000"
          }
        }
      }
    });

    return myChart;
  }

  indexjs.setPieChart = function() {
    var ctx = document.getElementById("myPieChart");
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow"
        ],
        datasets: [{
          label: 'Sample1',
          data: indexjs.getDemoData(3),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Pie Chart'
        },
        animation:{
          animateScale:true
        }
      }
    });

    return myChart;
  }

  indexjs.setDoughnutChart = function() {
    var ctx = document.getElementById("myDoughnutChart");
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow"
        ],
        datasets: [{
          label: 'Sample1',
          data: indexjs.getDemoData(3),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Pie Chart'
        },
        animation:{
          animateScale:true
        }
      }
    });

    return myChart;
  }

  indexjs.setBubbleChart = function() {
    var ctx = document.getElementById("myBubbleChart");
    var myChart = new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Sample1',
          data: indexjs.getDemoBobbleData(20),
          backgroundColor:"#FF6384",
          hoverBackgroundColor: "#FF6384",
        }]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Bubble Chart'
        }
      }
    });

    return myChart;
  }

  // 初期処理
  indexjs.init();

  return indexjs;
})();