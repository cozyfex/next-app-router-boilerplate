import BookSampleSliceInterface from '@interfaces/stores/bookSampleSliceInterface'
import UserSampleSliceInterface from '@interfaces/stores/userSampleSliceInterface'

import createBookSampleSlice from '@stores/createBookSampleSlice'
import createUserSampleSlice from '@stores/createUserSampleSlice'
import { zPersistSelector, zSelector } from '@stores/selectors'

const zStore = {
  sampleUser: zSelector<UserSampleSliceInterface>(createUserSampleSlice),
  // sampleBook: zSelector<BookSampleSliceInterface>(createBookSampleSlice),
  sampleBook: zPersistSelector<BookSampleSliceInterface>(
    'book',
    createBookSampleSlice,
  ),
}

export default zStore
