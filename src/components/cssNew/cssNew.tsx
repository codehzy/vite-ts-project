import {
  // FunctionalComponent as FC,
  defineComponent,
  onMounted
} from 'vue'

export default defineComponent({
  name: 'cssNew',
  setup() {
    onMounted(() => {})

    return () => (
      <>
        <div>
          <p
            style={{
              backgroundColor: 'dodgerblue',
              direction: 'rtl'
            }}
          >
            <button>确定</button>
            <button>取消</button>
          </p>
          <div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              backgroundImage:
                'conic-gradient(yellow 30%,green 0deg 75%,deepskyBlue 0deg)'
            }}
          ></div>
        </div>
      </>
    )
  }
})
