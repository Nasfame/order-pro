import React, { createElement } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import AddOrder from '../components/AddOrder'
import OrderList from '../components/OrderList'
import EditOrder from '../components/EditOrder'
import OrderContext from '../context/OrderContext'
import useLocalStorage from '../hooks/useLocalStorage'
import api from '../api.js'
import { useEffect, useState, useRef } from 'react'

const AppRouter = () => {
  const [orders, setOrders] = useLocalStorage('orders', [])
  const [nav, setNav_] = useState(['Order Pro', ''])
  const navRef = useRef(nav)
  const headRef = useRef('')
  const [rerender, setRerender] = useState(false)
  const [login, setLogin] = useState(false)

  useEffect(() => {
    api().then((res) => {
      if (res.status !== 500) {
        let data = res.data
        setOrders(data)
      }
    })
    console.log('mount')
  })

  const setNav = (nav) => {
    navRef.current = nav
    setRerender(true) // setOrders()
  }

  const setHead = (head) => {
    headRef.current = head
    setRerender(true)
  }

  const handleLogin = (user) => {
    setLogin(true)
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar nav={navRef.current} />
        <Header head={headRef.current}/>
        <div className='main-content'>
          <OrderContext.Provider
            value={{ orders, setOrders, api, setNav, setHead, handleLogin }}>
            <Switch>
              <Route component={LoginForm} path='/' exact={true} />
              <Route component={AddOrder} path='/add' />
              <Route component={OrderList} path='/orders' />
              <Route component={EditOrder} path='/edit/:id' />
              <Route path='*' component={() => <Redirect to='/' />} />
            </Switch>
          </OrderContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
