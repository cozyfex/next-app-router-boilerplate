import UserSampleSliceInterface from '@interfaces/stores/userSampleSliceInterface'

import createUserSampleSlice from '@stores/createUserSampleStore'
import { zSelector } from '@stores/selectors'

const zStore = {
  sampleUser: zSelector<UserSampleSliceInterface>(createUserSampleSlice),
}

export default zStore
