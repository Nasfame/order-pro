import { useContext, useState } from 'react'
import _ from 'lodash'
import { OrderContext } from '../context'

import { Div, Link, Nav, Order, Dash } from '../components'
import { Button, Navbar } from 'react-bootstrap'

const OrderList = ({ history }) => {
  const { orders, setOrders, api, handler } = useContext(OrderContext)

  return (
    <Div Class='orders'>
      <Nav>
        <Dash Id='side-bar' Class='m-0 p-0' />
        <Link
          Class='text-light border-white rounded px-4 py-1 mx-1 my-2'
          to='/login'>
          PUNCH OUT
        </Link>
      </Nav>

      <Div Class='order-list'>
        {!_.isEmpty(orders) ? (
          orders.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <Div Class='message'>No Orders Yet</Div>
        )}
      </Div>
    </Div>
  )
}

export default OrderList
