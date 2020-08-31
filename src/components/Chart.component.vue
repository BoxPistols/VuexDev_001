<template>
    <div class="chart_lay">
        <div class="chart_org">
            <apexchart :width="width" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>

        <div class="chart_org">
            <apexchart :width="width" height="350" :options="chartOptions2" :series="series2"></apexchart>
        </div>

        <div class="chart_org">
            <apexchart type="radialBar" height="350" :options="chartOptions3" :series="series3"></apexchart>
        </div>

        <div class="chart_org">
            <apexchart type="bar" height="350" :options="chartOptions4" :series="series4"></apexchart>
        </div>
    </div>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts' Vue.component('apexchart',
// VueApexCharts)

export default {
    data: function() {
        return {
            width: 600,
            series: [
                {
                    name: "Website Blog",
                    type: "column",
                    data: [
                        440,
                        505,
                        414,
                        671,
                        227,
                        413,
                        201,
                        352,
                        752,
                        320,
                        257,
                        160
                    ]
                },
                {
                    name: "Social Media",
                    type: "line",
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "line"
                },
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: "Traffic Sources"
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                labels: [
                    "01 Jan 2001",
                    "02 Jan 2001",
                    "03 Jan 2001",
                    "04 Jan 2001",
                    "05 Jan 2001",
                    "06 Jan 2001",
                    "07 Jan 2001",
                    "08 Jan 2001",
                    "09 Jan 2001",
                    "10 Jan 2001",
                    "11 Jan 2001",
                    "12 Jan 2001"
                ],
                xaxis: {
                    type: "datetime"
                },
                yaxis: [
                    {
                        title: {
                            text: "Website Blog"
                        }
                    },
                    {
                        opposite: true,
                        title: {
                            text: "Social Media"
                        }
                    }
                ],
                responsive: [
                    {
                        breakpoint: 800,
                        options: {
                            legend: {
                                position: "bottom",
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }
                ]
            },
            /***
             * Radar
             */
            series2: [
                {
                    name: "Series 1",
                    data: [85, 50, 30, 40, 100, 20]
                }
            ],
            chartOptions2: {
                chart: {
                    height: 350,
                    type: "radar"
                },
                title: {
                    text: "Basic Radar Chart"
                },
                xaxis: {
                    categories: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June"
                    ]
                }
            },
            /***
             * Radial Bar
             */
            series3: [44, 55, 67, 83],
            chartOptions3: {
                chart: {
                    height: 350,
                    type: "radialBar"
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: "22px"
                            },
                            value: {
                                fontSize: "16px"
                            },
                            total: {
                                show: true,
                                label: "Total"
                            }
                        }
                    }
                },
                labels: ["Apples", "Oranges", "Bananas", "Berries"]
            },
            /***
             * Stack
             */
            series4: [
                {
                    name: "PRODUCT A",
                    data: [44, 55, 41, 67, 22, 43]
                },
                {
                    name: "PRODUCT B",
                    data: [13, 23, 20, 8, 13, 27]
                },
                {
                    name: "PRODUCT C",
                    data: [11, 17, 15, 15, 21, 14]
                },
                {
                    name: "PRODUCT D",
                    data: [21, 7, 25, 13, 22, 8]
                }
            ],
            chartOptions4: {
                chart: {
                    type: "bar",
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                responsive: [
                    {
                        breakpoint: 800,
                        options: {
                            legend: {
                                position: "bottom",
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }
                ],
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                xaxis: {
                    type: "datetime",
                    categories: [
                        "01/01/2011 GMT",
                        "01/02/2011 GMT",
                        "01/03/2011 GMT",
                        "01/04/2011 GMT",
                        "01/05/2011 GMT",
                        "01/06/2011 GMT"
                    ]
                },
                legend: {
                    position: "right",
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                }
            }
        };
    }
};
</script>

<style lang="sass" scoped>
.chart
    &_lay
        display: inline-flex
        flex-wrap: wrap
        justify-content: center
    &_org
        width: 100%
        min-width: calc(768px / 2)
        max-width: calc(1280px / 2 - 20px)
        padding: 24px 0 12px
        border-bottom: 1px solid #eee
        &:nth-child(odd)
            border-right: 1px solid #eee
</style>
