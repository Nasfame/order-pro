import { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import OrderContext from '../context/OrderContext'
import Div from '../components/Div'
import Link from '../components/Link'

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
        <Link to='/login' Content='Home' Class='link icon-home' />

        <Link to='/add' Class='link icon-notepad' Content='Order entry' />

        <Link to='/add' Class='link icon-notepad ' Content='Receipt entry' />

        <Link to='/add' Class='link icon-pad ' Content='Order history' />

        <Link to='/add' Class='link icon-pad ' Content='Receipt history' />

        <Link to='/add' Class='link icon-refresh ' Content='Refresh data' />

        <Link to='/login' Class='link icon-power ' Content='Logout' />
      </div>
    </header>
  )
}

export default Dash
