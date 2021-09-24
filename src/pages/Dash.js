import { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import OrderContext from '../context/OrderContext'
import Div from '../components/Div'

const Dash = () => {
  const { setNav, setHead } = useContext(OrderContext)

  useEffect(() => {
    let nav = [<Div Class='logo' />, 'Order Pro']
    let navbar = [nav, '']
    setNav(navbar)
    setHead(['', ''])
  })

  return (
    <header>
      <div className='links'>
        <NavLink
          to='/login'
          className='link icon-home'
          activeClassName='active'
          exact>
          Home
        </NavLink>
        <NavLink
          to='/add'
          className='link icon-notepad '
          activeClassName='active'>
          Order entry
        </NavLink>
        <NavLink
          to='/add'
          className='link icon-notepad '
          activeClassName='active'>
          Receipt entry
        </NavLink>
        <NavLink to='/add' className='link icon-pad ' activeClassName='active'>
          Order History
        </NavLink>
        <NavLink to='/add' className='link icon-pad ' activeClassName='active'>
          Receipt History
        </NavLink>
        <NavLink
          to='/add'
          className='link icon-refresh '
          activeClassName='active'>
          Refresh Data
        </NavLink>
        <NavLink
          to='/login'
          className='link icon-power '
          activeClassName='active'>
          Logout
        </NavLink>
      </div>
    </header>
  )
}

export default Dash
