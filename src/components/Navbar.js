const Navbar = ({ nav }) => {
  if (!nav) return null
  const [content, style] = nav
  return <nav className={'navbar bg-primary navBar' + style}>{content}</nav>
}

export default Navbar
