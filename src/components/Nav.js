const Nav = ({ Class, children }) => {
  // if (!nav) return null
  return <nav className={'navbar bg-primary navBar ' + Class}>{children}</nav>
}

export default Nav
