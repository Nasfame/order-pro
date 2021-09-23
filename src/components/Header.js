import { NavLink } from 'react-router-dom'

const Header = ({ head }) => {
  const [content, style] = head
  return (
    <header className={'font-weight-bold text-primary p-2 m-2' + style}>
      <h2>{content}</h2>
    </header>
  )
}

export default Header
