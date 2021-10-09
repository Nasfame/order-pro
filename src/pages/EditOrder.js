import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { OrderContext } from '../context'
import { OrderForm } from '../components'

const EditOrder = ({ history }) => {
  const { orders, setOrders, api } = useContext(OrderContext)
  const { id } = useParams() // eslint-disable-next-line
  const orderToEdit = orders.find((order) => order.id == id) //=== doesnt work as localStorage stores as string.

  const handleOnSubmit = (order) => {
    const filteredOrders = orders.filter((order) => order.id != id)
    setOrders([order, ...filteredOrders])
    api('PATCH', order, id)
    history.push('/')
  }

  return (
    <OrderForm
      orderToEdit={orderToEdit}
      handleOnSubmit={handleOnSubmit}
      history={history}
    />
  )
}

export default EditOrder
