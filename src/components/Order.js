import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Div } from '.'

const Order = ({ order, handleRemoveOrder }) => {
  const history = useHistory()
  const { id, time, date, customerName, customerDetails } = order
  return (
    <Card style={{ width: '18rem' }} className='order'>
      <Card.Body>
        <Card.Title className='order-title'>{id}</Card.Title>
        <Div Class='order-details'>
          <Div>{customerName}</Div>
          <Div>{date}</Div>
          <Button
            className='icon-back'
            onClick={() => {
              history.goBack()
            }}></Button>
        </Div>
        {/* <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '} */}
      </Card.Body>
    </Card>
  )
}

export default Order
