import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Order = ({ order, handleRemoveOrder }) => {
  const history = useHistory()
  const { id, date } = order
  return (
    <Card style={{ width: '18rem' }} className='order'>
      <Card.Body>
        <Card.Title className='order-title'>{id}</Card.Title>
        <div className='order-details'>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant='danger' onClick={() => handleRemoveOrder(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Order
