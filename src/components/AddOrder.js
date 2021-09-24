import { Fragment, useContext, useEffect } from 'react'
import OrderContext from '../context/OrderContext'
import OrderForm from './OrderForm'

const AddOrder = ({ history }) => {
  const { orders, setOrders, api, setNav, setHead } = useContext(OrderContext)

  const handleOnSubmit = async (order) => {
    await setOrders([...orders, order])
    api('POST', order)
    history.push('/')
  }

  return (
    <Fragment>
      <OrderForm
        handleOnSubmit={handleOnSubmit}
        setNav={setNav}
        setHead={setHead}
        history={history}
      />
    </Fragment>
  )
}

export default AddOrder
