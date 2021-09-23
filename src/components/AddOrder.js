import { Fragment, useContext, useEffect } from 'react'
import OrderContext from '../context/OrderContext'
import OrderForm from './OrderForm'

const AddOrder = ({ history }) => {
  const { orders, setOrders, api, setNav } = useContext(OrderContext)
  let content = 'Account Details'
  let style = ''
  const handleOnSubmit = async (order) => {
    await setOrders([...orders, order])
    api('POST', order)
    history.push('/')
  }
  useEffect(() => setNav([content, style]))
  return (
    <Fragment>
      <OrderForm handleOnSubmit={handleOnSubmit} />
    </Fragment>
  )
}

export default AddOrder
