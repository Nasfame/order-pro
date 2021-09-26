import { Button } from 'react-bootstrap'
import LinkContext from '../context/LinkContext'
import { useContext } from 'react'

const Link = ({ Class, to, children }) => {
  const { history } = useContext(LinkContext)

  let handler = () => console.log('Link')
  let handle = history ? () => history.push(to) : handler
  return (
    <Button
      variant='default'
      type='submit'
      className={'text-decoration-none ' + Class}
      onClick={handle}>
      {children}
    </Button>
  )
}

export default Link
