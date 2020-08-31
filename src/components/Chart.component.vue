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
                ]
            },
            /***
             * Radar
             */
            series2: [
                {
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20]
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
                                // formatter: function(w) {
                                //     // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                //     return 249;
                                // }
                            }
                        }
                    }
                },
                labels: ["Apples", "Oranges", "Bananas", "Berries"]
            }
        };
    }
};
</script>

<style lang="sass" scoped>
.chart
    &_lay
        display: flex
        flex-wrap: wrap
        justify-content: center
    &_org
        padding: 24px 12px 12px
</style>
