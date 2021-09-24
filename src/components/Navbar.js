const Navbar = ({ nav }) => {
  const [content, style] = nav
  return <nav className={'navbar bg-primary p-2 nav ' + style}>{content}</nav>
}

export default Navbar
