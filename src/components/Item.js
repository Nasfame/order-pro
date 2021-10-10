import { Card, Image } from 'react-bootstrap'
import { Div } from '.'

const Item = ({ item, count }) => {
  return (
    <>
      <li className={'list-group-item '}>
        <Card className=' text-nowrap mx-2'>
          <Card.Body className='order-details'>
            <Div Class='d-flex  justify-content-between align-items-center'>
              <Image className={`icon-${item} p-5`} />
              <Div Class='btn btn-primary'>{count}</Div>
            </Div>
          </Card.Body>
        </Card>
      </li>
    </>
  )
}

export default Item
