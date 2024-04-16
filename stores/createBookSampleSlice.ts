import { StateCreator } from 'zustand'

import BookSampleSliceInterface from '@interfaces/stores/bookSampleSliceInterface'

const createBookSampleSlice: StateCreator<BookSampleSliceInterface> = (
  set,
) => ({
  title: '',
  author: '',
  setTitle: (title: string) => set(() => ({ title })),
  setAuthor: (author: string) => set(() => ({ author })),
})

export default createBookSampleSlice
