import mitt, { type Emitter, type EventType } from 'mitt'
import { computed } from 'vue'
import { useAppInstance } from './instance'

const mitter = mitt()
export function useMitter<Events extends Record<EventType, unknown>>() {
  const { isChildApp, mainApp } = useAppInstance<Events>()

  const _Emitter = computed(() => {
    if (!isChildApp.value) return mitter as Emitter<Events>
    const _mitter = {
      all: (mitter as Emitter<Events>).all,
      on: mainApp.value.$eventHub.$on.bind(mainApp.value.$eventHub),
      off: mainApp.value.$eventHub.$off.bind(mainApp.value.$eventHub),
      emit: mainApp.value.$eventHub.$emit.bind(mainApp.value.$eventHub)
    }
    return _mitter as Emitter<Events>
  })
  return _Emitter
}
