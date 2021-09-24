const Navbar = ({ nav }) => {
  const [content, style] = nav
  return <nav className={'navbar bg-primary nav ' + style}>{content}</nav>
}

export default Navbar
