import { useLayoutEffect, useContext } from 'react'
import OrderContext from '../context/OrderContext'
import Div from '../components/Div'
import Link from '../components/Link'
import refresh from '../controllers/refresh'
import LinkContext from '../context/LinkContext'

const Dash = () => {
  const { setNav, setHead, history } = useContext(OrderContext)
  let nav = [
    <Div Class='logo m-3 mt-0 p-5' />,
    <Div Content='Order Pro' Class='mb-1' />,
  ]
  let navbar = [nav, ' flex-column align-content-start']

  useLayoutEffect(() => {
    setNav(navbar)
    setHead()
    // refresh(10)
  })

  return (
    <header>
      <LinkContext.Provider value={history}>
        <div className='links'>
          <Link to='/login' Content='Home' Class='link icon-home' />

          <Link to='/add' Class='link icon-notepad' Content='Order entry' />

          <Link to='/add' Class='link icon-notepad' Content='Receipt entry' />

          <Link to='/orders' Class='link icon-pad' Content='Order history' />

          <Link to='/orders' Class='link icon-pad' Content='Receipt history' />

          <Link to='/' Class='link icon-refresh' Content='Refresh data' />

          <Link to='/login' Class='link icon-power' Content='Logout' />
        </div>
      </LinkContext.Provider>
    </header>
  )
}

export default Dash
