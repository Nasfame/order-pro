import { Item } from '../components'
import { Card, Button } from 'react-bootstrap'
import { Div, Nav, Link } from '../components'

const Cart = ({ history }) => {
  const { orders } = history.location.state
  let render = Object.entries(JSON.parse(orders)).map(([key, val], i) => (
    <Item item={key} count={val} key={i} />
  ))

  return (
    <>
      <Nav Class='justify-content-between py-3 px-2'>
        <Button
          className='icon-back'
          onClick={() => {
            history.goBack()
          }}></Button>
        <Div Class='text-light'>Shopping Cart</Div>
      </Nav>

      <ul class='list-group '>{render}</ul>
    </>
  )
}

export default Cart
