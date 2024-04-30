import { create, StateCreator, StoreApi, UseBoundStore } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type StateType = object

type WithSelectorType<S> = S extends { getState: () => infer T }
  ? S & {
      use: { [K in keyof T]: () => T[K] }
      z: () => T
    }
  : never

export const createSelectors = <S extends UseBoundStore<StoreApi<StateType>>>(
  _store: S,
) => {
  const store = _store as WithSelectorType<typeof _store>

  /* eslint-disable @typescript-eslint/no-explicit-any */

  store.use = {}
  for (const k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  store.z = () => {
    const z: any = {}
    for (const k of Object.keys(store.getState())) {
      z[k] = (store.use as any)[k]()
    }

    return z
  }

  /* eslint-enable @typescript-eslint/no-explicit-any */

  return store
}

export const zSelector = <T extends object>(slice: StateCreator<T>) => {
  return createSelectors(
    create<T>()((...a) => ({
      ...slice(...a),
    })),
  )
}

export const zPersistSelector = <T extends object>(
  name: string,
  slice: StateCreator<T>,
  storageType: Storage | null = null,
) => {
  return createSelectors(
    create<T>()(
      persist(
        (...a) => ({
          ...slice(...a),
        }),
        {
          name,
          storage: createJSONStorage(() =>
            storageType === null ? localStorage : storageType,
          ),
        },
      ),
    ),
  )
}
