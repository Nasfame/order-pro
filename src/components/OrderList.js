import { Fragment, useContext, useEffect } from 'react'
import _ from 'lodash'
import Order from './Order'
import OrderContext from '../context/OrderContext'

const OrderList = () => {
  const { orders, setOrders, api, setNav } = useContext(OrderContext)
  setNav('')
  const handleRemoveOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id))
    api('DELETE', {}, id)
  }
  let content = ''
  let style = ''
  // useEffect(() => setNav([content, style]))
  return (
    <Fragment>
      <div className='order-list'>
        {!_.isEmpty(orders) ? (
          orders.map((order) => (
            <Order
              key={order.id}
              order={order}
              handleRemoveOrder={handleRemoveOrder}
            />
          ))
        ) : (
          <p className='message'>Welcome to the Admin Dashboard</p>
        )}
      </div>
    </Fragment>
  )
}

export default OrderList
