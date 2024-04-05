import { create } from 'zustand'

import UserSampleSliceInterface from '@interfaces/stores/userSampleSliceInterface'

import createUserSampleSlice from '@stores/createUserSampleStore'
import createSelectors from '@stores/selectors'

const useBoundStore = create<UserSampleSliceInterface>()((...a) => ({
  ...createUserSampleSlice(...a),
}))

const zStore = createSelectors(useBoundStore)

export default zStore
