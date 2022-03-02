import { defineComponent, FunctionalComponent as FC } from 'vue'
import { useStore } from '../../store/index'
import { useOtherStore } from '../../store/other'

export default defineComponent({
  name: 'piniaTest',
  setup: () => {
    const store = useStore()
    const useOther = useOtherStore()

    const handleAddClick = () => {
      store.increment()
    }

    // patch 方法一
    // const handlePatchClick = () => {
    //   store.$patch({
    //     count: store.count + 2
    //   })
    // }

    // 直接修改 方法二
    // const handlePatchClick = () => {
    //   store.count++
    // }

    const handlePatchClick = () => {
      store.$patch((state) => {
        state.count += 3
      })
    }

    const handleChangePhoneClick = () => {
      // 因为tel是getters的
      store.tel = '12887766360'
    }

    return () => (
      <div>
        <div onClick={handleAddClick}>count:{store.count}</div>
        <div onClick={handleAddClick}>getters中的tel:{store.telHidden}</div>
        <div onClick={handleAddClick}>getters中的tel:{store.telHidden}</div>
        <div onClick={handleAddClick}>getters中的tel:{useOther.age}</div>
        <button onClick={handlePatchClick}>修改数据$patch</button>
        <div>
          <button onClick={handleChangePhoneClick}>修改getters中的tel</button>
        </div>
      </div>
    )
  }
})
