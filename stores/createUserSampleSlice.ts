import { StateCreator } from 'zustand'

import UserSampleSliceInterface from '@interfaces/stores/userSampleSliceInterface'

const createUserSampleSlice: StateCreator<UserSampleSliceInterface> = (
  set,
) => ({
  username: '',
  nickname: '',
  setUsername: (username) => set(() => ({ username })),
  setNickname: (nickname) => set(() => ({ nickname })),
})

export default createUserSampleSlice
