import { useState } from 'react'

const getItem = (key) =>
  document.cookie.split('; ').reduce((total, currentCookie) => {
    const item = currentCookie.split('=')
    const storedKey = item[0]
    const storedValue = item[1]

    return key === storedKey ? decodeURIComponent(storedValue) : total
  }, '')

const setItem = (key, value) => {
  const now = new Date()
  const expiresTime = 60 * 60 * 1000
  now.setTime(now.getTime() + expiresTime)
  document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`
}

const useCookie = (key, defaultValue) => {
  const getCookie = () => getItem(key) || defaultValue
  const [cookie, setCookie] = useState(getCookie())

  const updateCookie = (value) => {
    setCookie(value)
    setItem(key, value)
  }

  return { cookie, updateCookie }
}

export default useCookie
