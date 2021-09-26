import { NavLink } from 'react-router-dom'

const Header = ({ Class, children }) => {
  return (
    <header className={'font-weight-bold p-2 m-2 ' + Class}>{children}</header>
  )
}

export default Header
