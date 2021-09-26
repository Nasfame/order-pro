import {
  useHistory,
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect,
  StaticRouter,
  Router,
} from 'react-router-dom'
import { useEffect, useState, useRef, useLayoutEffect, Fragment } from 'react'

import { OrderContext } from '../context'
import { api } from '../controllers'

import { LoginForm, AddOrder, OrderList, EditOrder } from '../pages'
import { Div, Dash } from '../components'

import { history, useLocalStorage } from '../hooks'

const AppRouter = () => {
  const [orders, setOrders] = useLocalStorage('orders', [])
  const [login, setLogin] = useState(false)

  useEffect(() => {
    api().then((res) => {
      if (res.status !== 500) {
        let data = res.data
        setOrders(data)
      }
    })
    console.log('PIA')
  })

  const handleLogin = (user) => {
    setLogin(true)
    // history.push('/')
  }

  return (
    <Router forceRefresh={true} history={history}>
      <Div>
        <Div Class='main-content'>
          <OrderContext.Provider
            value={{
              orders,
              setOrders,
              api,
              handleLogin,
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
        </Div>
      </Div>
    </Router>
  )
}

export default AppRouter
