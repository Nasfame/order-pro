import { Button, Card } from 'react-bootstrap'
import { Div, Link } from '.'

const Order = ({ order, handleRemoveOrder }) => {
  const { id, time, date, customerName, customerDetails } = order
  return (
    <Card className='order text-nowrap mb-2 mx-2'>
      <Card.Body className='order-details'>
        <Div Class='d-flex justify-content-between'>
          <Card.Text className='d-inline'>{customerName}</Card.Text>
          <Link Class='text-primary d-inline' to={`/edit/${id}`}>
            <b>View</b>
          </Link>
        </Div>
        <Card.Text>{customerDetails}</Card.Text>
        {/* <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '} */}
      </Card.Body>
    </Card>
  )
}

export default Order
