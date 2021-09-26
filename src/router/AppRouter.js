import {
  useHistory,
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect,
  StaticRouter,
} from 'react-router-dom'
import { useEffect, useState, useRef, useLayoutEffect, Fragment } from 'react'

import OrderContext from '../context/OrderContext'
import useLocalStorage from '../hooks/useLocalStorage'
import api from '../api.js'

import Base from '../components/Base'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

import Dash from '../pages/Dash'
import LoginForm from '../pages/LoginForm'
import AddOrder from '../pages/AddOrder'
import OrderList from '../pages/OrderList'
import EditOrder from '../pages/EditOrder'

import { createBrowserHistory } from 'history'
import history from '../hooks/history'

const AppRouter = () => {
  const [orders, setOrders] = useLocalStorage('orders', [])
  const navRef = useRef(['', ''])
  const headRef = useRef(['', ''])
  const [rerender, setRerender] = useState(false)
  const [login, setLogin] = useState(false)
  // const history = useHistory()
  const [nav, setNav_] = useState(['', ''])

  useEffect(() => {
    api().then((res) => {
      if (res.status !== 500) {
        let data = res.data
        setOrders(data)
      }
    })
    console.log('PIA')
  })

  const setNav = (nav) => {
    navRef.current = nav
    setRerender(true)
  }

  const setHead = (head) => {
    headRef.current = head
    setRerender(true)
  }

  const handleLogin = (user) => {
    setLogin(true)
    // history.push('/')
  }

  return (
    <BrowserRouter forceRefresh={true} history={history}>
      <div>
        {/* <Base /> */}
        <Navbar nav={navRef.current} />
        <Header head={headRef.current} />
        <div className='main-content'>
          <OrderContext.Provider
            value={{
              orders,
              setOrders,
              api,
              setNav,
              setHead,
              handleLogin,
              history,
            }}>
            <Switch>
              <Route component={Dash} path='/' exact={true} />
              <Route component={AddOrder} path='/add' />
              <Route component={OrderList} path='/orders' />
              <Route component={EditOrder} path='/edit/:id' />
              <Route component={LoginForm} path='/login' />
              <Route path='*' component={() => <Redirect to='/' />} />
            </Switch>
          </OrderContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
