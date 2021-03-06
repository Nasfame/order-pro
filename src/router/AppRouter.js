import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useEffect, useState, useLayoutEffect } from 'react'

import { OrderContext } from '../context'
import { api } from '../controllers'

import { LoginForm, AddOrder, OrderList, EditOrder, Cart } from '../pages'
import { Div } from '../components'

import { useLocalStorage } from '../hooks'

const AppRouter = () => {
  const [orders, setOrders] = useLocalStorage('orders', [])
  const [login, setLogin] = useState(false)

  useLayoutEffect(() => {
    api().then((res) => {
      if (res.status != 500) {
        let data = res.data
        console.log(data)
        setOrders(data)
      }
    })
    console.log('mount')
  }, [setOrders])

  const handleLogin = (user, history) => {
    const { username, password } = user
    if (username == 'admin' && password == 'admin') {
      setLogin(true)
      history.push('/orders')
    }
  }

  return (
    <BrowserRouter>
      <>
        <Div Class='main-content'>
          <OrderContext.Provider
            value={{
              orders,
              setOrders,
              api,
              handleLogin,
            }}>
            <Switch>
              <Route component={LoginForm} path='/' exact={true} />
              <Route component={AddOrder} path='/add' />
              <Route component={OrderList} path='/orders' />
              <Route component={EditOrder} path='/edit/:id' />
              <Route component={LoginForm} path='/login' />
              <Route component={Cart} path='/cart' />
              <Route path='*' component={() => <Redirect to='/' />} />
            </Switch>
          </OrderContext.Provider>
        </Div>
      </>
    </BrowserRouter>
  )
}

export default AppRouter
