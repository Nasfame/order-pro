import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Link = ({ Class, to, children }) => {
  const history = useHistory()

  let handler = () => console.log('Link')
  let handle = () => history.push(to)
  return (
    <Button
      variant='default'
      className={'text-decoration-none ' + Class}
      onClick={handle}>
      {children}
    </Button>
  )
}

export default Link
