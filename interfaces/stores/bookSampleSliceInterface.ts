import BookSampleInterface from '@interfaces/bookSampleInterface'

export default interface BookSampleSliceInterface extends BookSampleInterface {
  setTitle: (title: string) => void
  setAuthor: (author: string) => void
}
