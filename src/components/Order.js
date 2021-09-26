import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Order = ({ order, handleRemoveOrder }) => {
  const history = useHistory()
  const { id, time, date, customerName, customerDetails } = order
  return (
    <Card style={{ width: '18rem' }} className='order'>
      <Card.Body>
        <Card.Title className='order-title'>{id}</Card.Title>
        <div className='order-details'>
          <div>{customerName}</div>
          <div>{date}</div>
          <Button
            className='icon-back'
            onClick={() => {
              history.goBack()
            }}></Button>
        </div>
        {/* <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '} */}
      </Card.Body>
    </Card>
  )
}

export default Order
