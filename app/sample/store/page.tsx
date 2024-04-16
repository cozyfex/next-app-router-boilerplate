'use client'

import { ChangeEvent, useEffect, useState } from 'react'

import BookSampleInterface from '@interfaces/bookSampleInterface'
import UserSampleInterface from '@interfaces/userSampleInterface'

import zStore from '@stores'

const SampleStorePage = () => {
  const { username, nickname, setUsername, setNickname } = zStore.sampleUser.z()
  const { title, author, setTitle, setAuthor } = zStore.sampleBook.z()

  const [user, setUser] = useState<UserSampleInterface>({
    username,
    nickname,
  })
  const [book, setBook] = useState<BookSampleInterface>({
    author,
    title,
  })

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, username: event.target.value })
  }

  const handleNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, nickname: event.target.value })
  }

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, title: event.target.value })
  }

  const handleAuthor = (event: ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, author: event.target.value })
  }

  const handleSave = () => {
    setUsername(user.username)
    setNickname(user.nickname)
    setTitle(book.title)
    setAuthor(book.author)
  }

  useEffect(() => {
    setUser({ username, nickname })
  }, [username, nickname])

  useEffect(() => {
    setBook({ title, author })
  }, [title, author])

  return (
    <main>
      <div>
        <label htmlFor="username">
          Username:{' '}
          <input
            id="username"
            type="text"
            className="text-black"
            value={user.username}
            onChange={handleUsername}
          />
        </label>
      </div>
      <div>
        <label htmlFor="nickname">
          Nickname:{' '}
          <input
            id="nickname"
            type="text"
            className="text-black"
            value={user.nickname}
            onChange={handleNickname}
          />
        </label>
      </div>
      <div>
        {username} / {nickname}
      </div>
      <div>
        <label htmlFor="username">
          Title:{' '}
          <input
            id="username"
            type="text"
            className="text-black"
            value={book.title}
            onChange={handleTitle}
          />
        </label>
      </div>
      <div>
        <label htmlFor="nickname">
          Author:{' '}
          <input
            id="nickname"
            type="text"
            className="text-black"
            value={book.author}
            onChange={handleAuthor}
          />
        </label>
      </div>
      <div>
        {title} - {author}
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </main>
  )
}

export default SampleStorePage
