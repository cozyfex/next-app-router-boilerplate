import { create, StateCreator, StoreApi, UseBoundStore } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type State = object

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & {
      use: { [K in keyof T]: () => T[K] }
      z: () => T
    }
  : never

export const createSelectors = <S extends UseBoundStore<StoreApi<State>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>

  store.use = {}
  for (const k of Object.keys(store.getState())) {
    // eslint-disable-next-line
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  store.z = () => {
    // eslint-disable-next-line
    const z: any = {}
    for (const k of Object.keys(store.getState())) {
      // eslint-disable-next-line
      z[k] = (store.use as any)[k]()
    }

    return z
  }

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
