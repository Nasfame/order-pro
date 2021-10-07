import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Div, Nav } from '.'

const OrderForm = ({ orderToEdit, handleOnSubmit }) => {
  const history = useHistory()
  const [order, setOrder] = useState(
    orderToEdit ?? {
      id: '',
      customerName: '',
      customerDetails: '',
      date: '',
      discount: '',
      amount: '',
      time: '',
    },
  )
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    const values = Object.values(order)
    let errorMsg = ''

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim()
      return value !== ''
    })

    if (allFieldsFilled) {
      handleOnSubmit(order)
    } else errorMsg = 'Please fill out all the fields.'

    setErrorMsg(errorMsg)
  }

  const inputChange = (event) => {
    const { name, value } = event.target
    setOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <>
      <Nav Class='justify-content-between py-3'>
        <Button
          className='icon-back'
          onClick={() => {
            history.goBack()
          }}></Button>
        <Div>ACCOUNT DETAILS</Div>
        <Div />
      </Nav>

      <Div Class='container-fluid justify-content-center align-items-center'>
        {errorMsg && <Div Class='errorMsg'>{errorMsg}</Div>}
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control
              className='icon-menu input-control'
              type='number'
              value={order.id}
              placeholder='Order Number'
              onChange={inputChange}
              name='id'
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className='icon-date input-control'
              type='date'
              value={order.date}
              placeholder='Date'
              onChange={inputChange}
              name='date'
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className=' icon-time input-control'
              type='time'
              value={order.time}
              placeholder='Time'
              onChange={inputChange}
              name='time'
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className='icon-people input-control'
              type='text'
              value={order.customerName}
              placeholder='Customer Name'
              onChange={inputChange}
              name='customerName'
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className='icon-hamburger input-control'
              value={order.customerDetails}
              placeholder='  Customer Details'
              onChange={inputChange}
              type='text'
              name='customerDetails'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label
              className='icon-plus input-control py-2 px-3 text-primary'
              // onClick = addProduct()
            >
              Add an item
            </Form.Label>
          </Form.Group>

          <Form.Group>
            <Form.Control
              className='icon-discount input-control'
              type='number'
              value={order.discount}
              placeholder='Discount'
              onChange={inputChange}
              name='discount'
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className='icon-amount input-control'
              type='number'
              value={order.amount}
              placeholder='Total Amount'
              onChange={inputChange}
              name='amount'
            />
          </Form.Group>
          <Button
            variant='default'
            type='submit'
            className='d-inline-flex justify-content-center border border-primary text-primary submit-btn'>
            Submit
          </Button>
        </Form>
      </Div>
    </>
  )
}

export default OrderForm
