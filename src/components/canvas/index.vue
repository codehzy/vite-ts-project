<script lang="ts">
import { defineComponent, onMounted, nextTick } from 'vue'
export default defineComponent({
  name: 'my',
  props: {},
  setup() {
    // 创建canvas动画
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
    onMounted(() => {
      oninitCanvas()
    })
  }
})
</script>
