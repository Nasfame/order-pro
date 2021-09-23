const Navbar = ({ nav }) => {
  const [content, style] = nav
  return (
    <nav className={'navbar bg-primary p-2 nav ' + style}>
      <h2>{content}</h2>
    </nav>
  )
}

export default Navbar
