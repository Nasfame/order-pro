import { Div, Link } from '.'
import { Navbar, Nav, Image, Dropdown } from 'react-bootstrap'

const Dash = ({ history, Class, Id }) => {
  let navs = [
    ['/', 'Home', 'home'],
    ['/add', 'Order entry', 'notepad'],
    ['/add', 'Receipt entry', 'notepad'],
    ['/orders', 'Order history', 'pad'],
    ['/orders', 'Receipt history', 'pad'],
    ['', 'Refresh', 'refresh'],
    ['/login', 'Logout', 'power'],
  ]
  let navbar = navs.map(([loc, cnt, icon], i) => {
    return (
      <li>
        <Link key={i} to={loc} Class={`icon-${icon}`}>
          <b>{cnt}</b>
        </Link>
      </li>
    )
  })

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant=''
          className='icon-hamburger p-3'></Dropdown.Toggle>
        <Dropdown.Menu className={Class} id={Id}>
          <Navbar
            bg='primary d-flex flex-column align-items-start py-0'
            expand='lg'
            variant='dark'>
            <Image className='logo m-2' />
            <Navbar.Brand
              href=''
              className='m-2
            '>
              Order Pro
            </Navbar.Brand>
          </Navbar>
          <ol className='navbar-nav m-2 text-nowrap'>{navbar}</ol>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Dash
