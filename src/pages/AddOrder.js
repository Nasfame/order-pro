import { useContext, useEffect } from 'react'
import { OrderContext } from '../context'
import { OrderForm } from '../components'

const AddOrder = ({ history }) => {
  const { orders, setOrders, api } = useContext(OrderContext)

  const handleOnSubmit = async (order) => {
    await setOrders([...orders, order])
    api('POST', order)
    history.push('/')
  }

  return (
    <>
      <OrderForm handleOnSubmit={handleOnSubmit} history={history} />
    </>
  )
}

export default AddOrder
