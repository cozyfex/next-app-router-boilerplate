'use client'

import { ChangeEvent, useState } from 'react'
import UserSampleInterface from '@interfaces/userSampleInterface'
import zStore from '@stores'

export default function Home() {
  const username = zStore.use.username()
  const nickname = zStore.use.nickname()
  const setUsername = zStore.use.setUsername()
  const setNickname = zStore.use.setNickname()

  const [user, setUser] = useState<UserSampleInterface>({
    username: '',
    nickname: '',
  })

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, username: event.target.value })
  }

  const handleNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, nickname: event.target.value })
  }

  const handleSave = () => {
    setUsername(user.username)
    setNickname(user.nickname)
  }

  return (
    <main>
      <div>
        <label htmlFor='username'>
          Username:{' '}
          <input
            id='username'
            type='text'
            value={user.username}
            onChange={handleUsername}
          />
        </label>
      </div>
      <div>
        <label htmlFor='nickname'>
          Nickname:{' '}
          <input
            id='nickname'
            type='text'
            value={user.nickname}
            onChange={handleNickname}
          />
        </label>
      </div>
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div>
        {username} / {nickname}
      </div>
    </main>
  )
}
