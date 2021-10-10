import { useState } from 'react'
// @ts-ignore
import { Form, Button, Modal, Image } from 'react-bootstrap'
// @ts-ignore
import { Div, Nav } from '.'

const Items = ({ Class, show, setShow, cartIt }) => {
  const handleShow = () => setShow((show) => !show)
  const [order, setOrder] = useState({})

  const handle = (item) => {
    setOrder((order) => {
      if (order[item]) order[item] += 1
      else order[item] = 1
      return order
    })
    console.log(order)
  }

  let items = ['hamburger', 'time', 'plus', 'amount', 'menu']
  items = items.map((item) => (
    <Button
      variant='default'
      className={`icon-${item} p-5`}
      onClick={() => handle(item)}
    />
  ))

  return (
    <Modal show={show} backdrop='static' keyboard={false} class={`${Class}`}>
      <Modal.Body class='container'>{items}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleShow}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            let event = {}
            event.target = { name: 'items', value: order }
            handleShow()
            cartIt(event)
          }}>
          Shop
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default Items
