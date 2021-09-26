import { Fragment, useContext, useEffect, useLayoutEffect } from 'react'
import _ from 'lodash'
import Order from '../components/Order'
import OrderContext from '../context/OrderContext'
import Div from '../components/Div'
import Link from '../components/Link'
import { Button } from 'react-bootstrap'
import refresh from '../controllers/refresh'

const OrderList = (history) => {
  const { orders, setOrders, api, setNav, setHead } = useContext(OrderContext)

  useEffect(() => {
    let punchOut = <Link Class='text-light ' to='/login' Content='PUNCH OUT' />
    let nav = [
      <Link Class='icon-list' />,
      <Div
        Content={punchOut}
        Class='rounded border-white bg-danger px-4 py-2 mx-3'
      />,
    ]
    let navbar = [nav, 'justify-content-between ']
    let heading = []
    setNav(navbar)
    setHead(heading)
    refresh(10)
  })

  return (
    <Fragment>
      <div className='order-list'>
        {!_.isEmpty(orders) ? (
          orders.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <p className='message'>No Orders Yet</p>
        )}
      </div>
    </Fragment>
  )
}

export default OrderList
