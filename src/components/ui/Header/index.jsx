import { memo } from 'react'
import { PropTypes } from 'prop-types'

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  )
}

Header.prototype = {
  children: PropTypes.node.isRequired
}

export default memo(Header)
