<template>
  <Line :data="data" :options="options"/>
</template>

<script>
import {Line} from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
)


export default {
  name: "VAttendance",

  components: {
    Line
  },

  data() {
    return {
      data: {
        labels: [
          '00:00',
          '1:00',
          '2:00',
          '3:00',
          '4:00',
          '5:00',
          '6:00',
          '7:00',
          '8:00',
          '9:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00'
        ],
        datasets: [{data: [1,5,7.5,2,3,5,9,7,10,2,0,1,3,4,5,2,5,6,6]}
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: false,
        toltip:false,
      }
    }
  }
}
</script>

<style scoped>

</style>
