/* eslint-disable no-constant-condition */
<template>
  <div>
    <h1>Аналитика</h1>
    <div class="chart_container">
      <Chart :chartdata="datacollection" :options="options" />
    </div>
  </div>
</template>

<script>
import Chart from '../components/Chart';
import { loadId } from '../utils/localStorage';

import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

const chartData = [
  { date: '2020-07-01', visits: 213 },
  { date: '2020-07-02', visits: 249 },
  { date: '2020-07-03', visits: 179 },
  { date: '2020-07-04', visits: 170 },
  { date: '2020-07-05', visits: 184 },
  { date: '2020-07-06', visits: 202 },
  { date: '2020-07-07', visits: 198 },
  { date: '2020-07-08', visits: 168 },
  { date: '2020-07-09', visits: 176 },
  { date: '2020-07-10', visits: 171 },
  { date: '2020-07-11', visits: 190 },
  { date: '2020-07-12', visits: 154 },
  { date: '2020-07-13', visits: 246 },
  { date: '2020-07-14', visits: 250 },
  { date: '2020-07-15', visits: 227 },
  { date: '2020-07-16', visits: 140 },
  { date: '2020-07-17', visits: 170 },
  { date: '2020-07-18', visits: 125 },
  { date: '2020-07-19', visits: 106 },
  { date: '2020-07-20', visits: 207 },
  { date: '2020-07-21', visits: 222 },
  { date: '2020-07-22', visits: 198 },
  { date: '2020-07-23', visits: 204 },
  { date: '2020-07-24', visits: 213 },
  { date: '2020-07-25', visits: 145 },
  { date: '2020-07-26', visits: 166 },
  { date: '2020-07-27', visits: 163 },
  { date: '2020-07-28', visits: 135 },
  { date: '2020-07-29', visits: 45 }
];

const labels = chartData.map(d => {
  // const date = new Date(d.date)
  const date = moment(d.date)
    .format('LL')
    .slice(0, -8);

  return `${date}`;
});

export default {
  name: 'Analytics',
  components: {
    Chart
  },
  data () {
    return {
      datacollection: {
        labels: labels,
        datasets: [
          {
            label: 'Визиты',
            backgroundColor: 'rgba(193, 121, 185, .6)',
            borderColor: 'rgb(164, 44, 214)',
            pointBackgroundColor: 'rgb(164, 44, 214)',
            borderWidth: 2,
            data: chartData.map(d => d.visits)
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Аналитика по визитам'
        },

        scales: {
          xAxes: [
            {
              display: true,
              ticks: {
                maxRotation: 0,
                minRotation: 0,
                callback: function (dataLabel, index) {
                  return index % 4 === 0 ? dataLabel : '';
                }
              }
            }
          ]
        }
      }
    };
  },
  mounted () {
    const id = loadId();
    if (typeof id === 'undefined') this.$router.push('/');
  }
};
</script>

<style>
.chart_container {
  max-width: 500px;
  margin: 0 auto;
}
</style>
