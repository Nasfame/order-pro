import { NavLink } from 'react-router-dom'

const Header = ({ head }) => {
  if (!head) return null
  const [content, style] = head
  return (
    <header className={'font-weight-bold p-2 m-2 ' + style}>
      <h2>{content}</h2>
    </header>
  )
}

export default Header
