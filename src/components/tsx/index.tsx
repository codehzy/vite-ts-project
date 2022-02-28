import {
  FunctionalComponent as FC,
  defineComponent,
  reactive,
  onMounted
} from 'vue'
import Button from '../button.vue'

const FcNode: FC<{ data: number }> = ({ data }) => {
  return (
    <>
      <hr />
      <div>
        子组件:
        {data < 10 ? <span>{data}</span> : <span>{data * 10}</span>}
      </div>
    </>
  )
}

export default defineComponent({
  name: 'TexTest',
  setup() {
    const data = reactive({ count: 0 })

    onMounted(() => {
      data.count = 5
    })

    const clickHandler = () => data.count++

    return () => (
      <>
        <span style={{ marginRight: '10px' }}>{data.count}</span>
        <button onClick={clickHandler} name={'添加'}>
          +
        </button>
        <FcNode data={data.count} />
      </>
    )
  }
})
