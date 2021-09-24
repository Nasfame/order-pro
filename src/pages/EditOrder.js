import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import api from '../api.js'
import OrderContext from '../context/OrderContext'
import OrderForm from '../components/OrderForm'

const EditOrder = ({ history }) => {
  const { orders, setOrders, api, setNav } = useContext(OrderContext)
  const { id } = useParams() // eslint-disable-next-line
  const orderToEdit = orders.find((order) => order.id == id) //=== doesnt work as localStorage stores as string.
  // setNav{ content: 'Order Pro', style: '' }
  const handleOnSubmit = (order) => {
    // eslint-disable-next-line
    const filteredOrders = orders.filter((order) => order.id != id)
    setOrders([order, ...filteredOrders])
    api('PATCH', order, id)
    history.push('/')
  }

  let content = ''
  let style = ''
  useEffect(() => setNav([content, style]))

  return (
    <div>
      <OrderForm orderToEdit={orderToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditOrder
