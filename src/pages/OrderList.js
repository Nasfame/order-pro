import { useContext, useState } from 'react'
import _ from 'lodash'
import { OrderContext } from '../context'

import { Div, Link, Nav, Order, Dash } from '../components'
import { Button } from 'react-bootstrap'

const OrderList = (history) => {
  const { orders, setOrders, api } = useContext(OrderContext)
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const handler = () => {
    console.log('sdds')
  }
  return (
    <>
      <Dash Class='side-bar' />
      <Nav Class='justify-content-between'>
        {/* <Link Class='icon-list' /> */}
        <Button
          variant='default'
          type='submit'
          className='icon-list'
          onClick={handler}
        />

        <Link
          Class='text-light border-white rounded px-4 py-1 mx-3 my-2'
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
    </>
  )
}

export default OrderList
