import { memo, useEffect, useState } from 'react'
import { Input } from '@/components'
import { FaSearch } from 'react-icons/fa'
import { useDebounce } from '@/hooks'
import classes from './styles.module.css'

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    onSearch(value)
  }, [debouncedValue])

  return (
    <div className={classes.wrapper}>
      <FaSearch />
      <Input placeholder="Search..." onChange={handleChange} value={value} />
    </div>
  )
}

export default memo(SearchBar)
