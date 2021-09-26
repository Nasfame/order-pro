import { LinkContext } from '../context'
import { Div, Nav, Link } from '.'

const Dash = ({ history, Class }) => {
  return (
    <Div Class={Class}>
      <Nav Class=' flex-column align-content-start'>
        <Div Class='logo m-3 mt-0 p-5' />
        <Div Class='mb-1'> Order Pro</Div>
      </Nav>
      <Div Class='links'>
        <LinkContext.Provider value={{ history }}>
          <Link to='/login' Class='link icon-home'>
            Home
          </Link>

          <Link to='/add' Class='link icon-notepad'>
            Order entry
          </Link>

          <Link to='/add' Class='link icon-notepad'>
            Receipt entry
          </Link>

          <Link to='/orders' Class='link icon-pad'>
            Order history
          </Link>

          <Link to='/orders' Class='link icon-pad'>
            Receipt history
          </Link>

          <Link to='/' Class='link icon-refresh'>
            Refresh data
          </Link>

          <Link to='/login' Class='link icon-power'>
            Logout
          </Link>
        </LinkContext.Provider>
      </Div>
    </Div>
  )
}

export default Dash
