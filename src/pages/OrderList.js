import { useContext, useState } from 'react'
import _ from 'lodash'
import { OrderContext } from '../context'

import { Div, Link, Nav, Order, Dash } from '../components'
import { Button } from 'react-bootstrap'

const Orders = ({ history, Class }) => {
  const { orders, setOrders, api, handler } = useContext(OrderContext)

  return (
    <Div Class={Class}>
      <Nav Class='justify-content-between'>
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
    </Div>
  )
}

const OrderList = (history) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const handler = () => {
    console.log('sdds')
  }
  return (
    <>
      <Orders history={history} Class='orders' />
      <Dash Class='side-bar' />
    </>
  )
}

export default OrderList
