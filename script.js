$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

        var myChart = Highcharts.chart('authorsales', {
            
            chart: {
            
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'column'
            },
            title: {
                text: ' '
            },
            plotOptions: {
                series: {
                    pointWidth: 20
                }      
            },
            series: [{
                name: 'A',
                data: [7]
            }, {
                name: 'B',
                data: [10]
            }, {
                name: 'C',
                data: [5]
            }]
        });

        var myChart = Highcharts.chart('technologies', {
            
            chart: {
                type: 'pie'
            },
            title: {
                text: ' '
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
        
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'HTML',
                    y: 35,
                    selected: true
                }, {
                    name: 'CSS',
                    y: 45,
                }, {
                    name: 'Angular',
                    y: 20
                }]
            }]
        
        });

        var myChart = Highcharts.chart('totalorders', {
            chart: {
                type: 'area'
            },
            title: {
                text: ' '
            },
            tooltip: {
                pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'A',
                data: [
                    null, null, null, null, null, 6, 11, 32, 110, 235,
                    369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                    20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                    26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                    21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                    10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                    5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
                ]
            }]
        });

        Highcharts.setOptions({
            chart: {
                inverted: true,
                type: 'bullet'
            },
            title: {
                text: null
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    color: '#000'
                    
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });
        
        var myChart = Highcharts.chart('project', {
            chart: {
            },
            title: {
                text: ' '
            },
            yAxis: {
                plotBands: [{
                    from: 0,
                    to: 1800,
                    color: '#1476CD'
                }],
                title: null
            },
            series: [{
                data: [{
                    y: 150,
                    target: 250
                }]
            }],
        });

        var myChart = Highcharts.chart('html', {
            chart: {
            },
            title: {
                text: ' '
            },
            yAxis: {
                plotBands: [{
                    from: 0,
                    to: 1800,
                    color: 'pink'
                }],
                title: null
            },
            series: [{
                data: [{
                    y: 100,
                    target: 250
                }]
            }],
        });
        
        var myChart = Highcharts.chart('wordpress', {
            chart: {
            },
            title: {
                text: ' '
            },
            yAxis: {
                plotBands: [{
                    from: 0,
                    to: 1800,
                    color: 'red'
                }],
                title: null
            },
            series: [{
                data: [{
                    y: 110,
                    target: 250
                }]
            }],
        });
        
        var myChart = Highcharts.chart('ecommerce', {
            chart: {
            },
            title: {
                text: ' '
            },
            yAxis: {
                plotBands: [{
                    from: 0,
                    to: 1800,
                    color: 'lightgreen'
                }],
                title: null
            },
            series: [{
                data: [{
                    y: 120,
                    target: 250
                }]
            }],
        });

        var myChart = Highcharts.chart('design', {
            chart: {
            },
            title: {
                text: ' '
            },
            yAxis: {
                plotBands: [{
                    from: 0,
                    to: 1800,
                    color: 'yellow'
                }],
                title: null
            },
            series: [{
                data: [{
                    y: 200,
                    target: 250
                }]
            }],
        });

        var myChart = Highcharts.chart('themes', {
            chart: {
            },
            title: {
                text: ' '
            },
            yAxis: {
                plotBands: [{
                    from: 0,
                    to: 1800,
                    color: 'orange'
                }],
                title: null
            },
            series: [{
                data: [{
                    y: 200,
                    target: 250
                }]
            }],
        });

        Highcharts.chart('xyz', {
            chart: {
                type: 'column',
                inverted: false
            },
            xAxis: {
                categories: [
                    '1 Aug',
                    '2 Aug',
                    '3 Aug',
                    '4 Aug',
                    '5 Aug',
                ],
            },
            yAxis: {
                min: 0,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Author',
                data: [49.9, 71.5, 106.4, 129.2, 144.0],
                color: 'lightblue'
        
            }, {
                name: 'Customer',
                data: [83.6, 78.8, 98.5, 93.4, 106.0],
                color: 'grey'
        
            }]
        });
})


