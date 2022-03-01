import {
  // FunctionalComponent as FC,
  defineComponent,
  onMounted,
  nextTick
} from 'vue'

export default defineComponent({
  name: 'canvasA',
  setup() {
    const oninitCanvas = () => {
      nextTick(() => {
        const canvas: any = document.getElementById('canvas'),
          ctx = canvas.getContext('2d'),
          height: number = canvas.offsetHeight,
          width: number = canvas.offsetWidth,
          lines: string[] = [
            'rgba(248, 248, 248, .4)',
            'rgba(248, 248, 248, .5)',
            'rgba(248, 248, 248, .6)'
          ],
          boHeight: number = height / 10,
          posHeight: number = height / 1.8, // 波浪高度
          canvasAny: any = { width: width, height: height },
          requestAnimFrame = (function () {
            // 波浪自执行函数
            return function (callback: any) {
              setTimeout(callback, 100 / 6)
            }
          })()
        let step: number = 0
        // 动起来
        const loop = function () {
          ctx.clearRect(0, 0, canvasAny.width, canvasAny.height)
          step++
          // 画三个不同颜色的矩阵
          for (let j = lines.length - 1; j >= 0; j--) {
            // 每个矩阵的角度都不同，每个之间相差100度
            const angle: number = ((step + j * 100) * Math.PI) / 180,
              deltaHeight: number = Math.sin(angle) * boHeight,
              deltaHeightRight: number = Math.cos(angle) * boHeight
            ctx.fillStyle = lines[j]
            ctx.beginPath() // 开始绘制
            ctx.moveTo(0, posHeight + deltaHeight)
            ctx.bezierCurveTo(
              canvasAny.width / 2,
              posHeight + deltaHeight - boHeight,
              canvasAny.width / 2,
              posHeight + deltaHeightRight - boHeight,
              canvasAny.width,
              posHeight + deltaHeightRight
            )
            ctx.lineTo(canvasAny.width, canvasAny.height)
            ctx.lineTo(0, canvasAny.height)
            ctx.lineTo(0, posHeight + deltaHeight)
            ctx.fill() // 上色
            ctx.closePath() // 结束绘制
          }
          requestAnimFrame(loop) // 启动函数
        }
        // 随机数
        const random = function (min: number, max: number) {
          return Math.floor(Math.random() * (max - min) + min)
        }
        loop()
      })
    }

    const baseCanvas = () => {
      const canvas: any = document.getElementById('tutorial')
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'rgb(200,0,0)'
        ctx.fillRect(10, 10, 55, 50)

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
        ctx.fillRect(20, 20, 55, 50)
      }
    }

    const baseCanvas1 = () => {
      const canvas: any = document.getElementById('tutorial1')
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d')

        ctx.fillRect(25, 25, 100, 100)
        ctx.clearRect(45, 45, 60, 60)
        ctx.strokeRect(50, 50, 50, 50)
      }
    }

    const baseCanvas2 = () => {
      const canvas: any = document.getElementById('tutorial2')
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d')

        // 实心三角形
        // ctx.beginPath()
        // ctx.moveTo(0, 150)
        // ctx.lineTo(75, 0)
        // ctx.lineTo(150, 150)
        // ctx.fill()

        // 描边三角形
        ctx.beginPath()
        ctx.moveTo(125, 125)
        ctx.lineTo(125, 45)
        ctx.lineTo(45, 125)
        ctx.closePath()
        ctx.stroke()
      }
    }
    const baseCanvas3 = () => {
      const canvas: any = document.getElementById('tutorial3')
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
        ctx.moveTo(110, 75)
        ctx.arc(75, 75, 40, 0, Math.PI, false) // 口(顺时针)
        ctx.moveTo(65, 65)
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
        ctx.moveTo(95, 65)
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
        ctx.stroke()
      }
    }

    const baseCanvas4 = () => {
      const canvas: any = document.getElementById('tutorial4')
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d')

        var rectangle = new Path2D()
        rectangle.rect(10, 10, 50, 50)

        var circle = new Path2D()
        circle.moveTo(125, 35)
        circle.arc(100, 35, 25, 0, 2 * Math.PI)

        ctx.stroke(rectangle)
        ctx.stroke(circle)
      }
    }

    const baseCanvas5 = () => {
      const canvas: any = document.getElementById('tutorial5')
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')

        for (var i = 0; i < 6; i++) {
          for (var j = 0; j < 6; j++) {
            ctx.fillStyle =
              'rgb(' +
              Math.floor(255 - 42.5 * i) +
              ',' +
              Math.floor(255 - 42.5 * j) +
              ',0)'
            ctx.fillRect(j * 25, i * 25, 25, 25)
          }
        }
      }
    }

    const baseCanvas6 = () => {
      const canvas: any = document.getElementById('tutorial6')
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')

        for (var i = 0; i < 6; i++) {
          for (var j = 0; j < 6; j++) {
            ctx.strokeStyle =
              'rgb(0,' +
              Math.floor(255 - 42.5 * i) +
              ',' +
              Math.floor(255 - 42.5 * j) +
              ')'
            ctx.beginPath()
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
            ctx.stroke()
          }
        }
      }
    }

    const baseCanvas7 = () => {
      const canvas: any = document.getElementById('tutorial7')
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')

        // 画背景
        ctx.fillStyle = '#FD0'
        ctx.fillRect(0, 0, 75, 75)
        ctx.fillStyle = '#6C0'
        ctx.fillRect(75, 0, 75, 75)
        ctx.fillStyle = '#09F'
        ctx.fillRect(0, 75, 75, 75)
        ctx.fillStyle = '#F30'
        ctx.fillRect(75, 75, 75, 75)
        ctx.fillStyle = '#FFF'

        // 设置透明度值
        ctx.globalAlpha = 0.2

        // 画半透明圆
        for (var i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true)
          ctx.fill()
        }
      }
    }

    const baseCanvas8 = () => {
      const canvas: any = document.getElementById('tutorial8')
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')

        // 创建路径
        ctx.strokeStyle = '#09f'
        ctx.beginPath()
        ctx.moveTo(10, 10)
        ctx.lineTo(140, 10)
        ctx.moveTo(10, 140)
        ctx.lineTo(140, 140)
        ctx.stroke()

        ctx.strokeStyle = 'red'
        ctx.lineWidth = 15
        ctx.lineCap = 'butt'
        ctx.beginPath()
        ctx.moveTo(25, 10)
        ctx.lineTo(25, 140)
        ctx.stroke()

        ctx.strokeStyle = 'green'
        ctx.lineWidth = 15
        ctx.lineCap = 'butt'
        ctx.beginPath()
        ctx.moveTo(55, 60)
        ctx.lineTo(55, 120)
        ctx.stroke()

        ctx.strokeStyle = 'green'
        ctx.lineWidth = 1
        ctx.lineCap = 'butt'
        ctx.beginPath()
        ctx.moveTo(55, 40)
        ctx.lineTo(55, 140)
        ctx.stroke()
      }
    }

    onMounted(() => {
      oninitCanvas()
      baseCanvas()
      baseCanvas1()
      baseCanvas2()
      baseCanvas3()
      baseCanvas4()
      baseCanvas5()
      baseCanvas6()
      baseCanvas7()
      baseCanvas8()
    })

    return () => (
      <>
        <div
          style={{
            height: '200px',
            width: '200px',
            backgroundColor: '#6689e2',
            position: 'relative'
          }}
        >
          <canvas id="canvas" width="200" height="200"></canvas>
          <canvas id="tutorial" width="150" height="150"></canvas>
          <canvas id="tutorial1" width="150" height="150"></canvas>
          <canvas
            id="tutorial2"
            style={{
              transform: 'rotate(270deg)'
            }}
            width="150"
            height="150"
          ></canvas>
          <canvas id="tutorial3" width="150" height="150"></canvas>
          <canvas id="tutorial4" width="150" height="150"></canvas>
          <canvas id="tutorial5" width="150" height="150"></canvas>
          <canvas id="tutorial6" width="150" height="150"></canvas>
          <canvas id="tutorial7" width="150" height="150"></canvas>
          <canvas id="tutorial8" width="150" height="150"></canvas>
        </div>
      </>
    )
  }
})
