import { FunctionalComponent as FC, defineComponent, onMounted } from 'vue'
import * as echarts from 'echarts'
import walden from './theme/walden.json'

export default defineComponent({
  name: 'echartsA',
  setup() {
    const echartsA = () => {
      echarts.registerTheme('walden', walden)

      const myChart = echarts.init(
        document.getElementById('main') as HTMLElement,
        'walden'
      )

      myChart.resize({
        width: 400,
        height: 300
      })
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }

    const echartsB = () => {
      echarts.registerTheme('walden', walden)

      const myChart = echarts.init(
        document.getElementById('main1') as HTMLElement,
        'walden'
      )

      myChart.resize({
        width: 400,
        height: 300
      })
      const options = {
        xAxis: {
          type: 'category',
          data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            name: '2015',
            data: [89.3, 92.1, 94.4, 85.4]
          },
          {
            type: 'bar',
            name: '2016',
            data: [95.8, 89.4, 91.2, 76.9]
          },
          {
            type: 'bar',
            name: '2017',
            data: [97.7, 83.1, 92.5, 78.1]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(options)
    }

    // 折线图
    const echartsC = () => {
      echarts.registerTheme('walden', walden)

      const myChart = echarts.init(
        document.getElementById('main2') as HTMLElement,
        'walden'
      )

      myChart.resize({
        width: 400,
        height: 300
      })
      const options = {
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'line',
            stack: 'x',
            areaStyle: {}
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'line',
            stack: 'x',
            areaStyle: {}
          }
        ]
      }
      // 绘制图表
      myChart.setOption(options)
    }

    onMounted(() => {
      echartsA()
      echartsB()
      echartsC()
    })

    return () => (
      <>
        <div id="main" style={{ width: '100%', height: '300px' }}></div>
        <div id="main1" style={{ width: '100%', height: '300px' }}></div>
        <div id="main2" style={{ width: '100%', height: '300px' }}></div>
      </>
    )
  }
})
