import { Form, Button } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import OrderContext from '../context/OrderContext'

const Div = ({ Class }) => {
  return <div className={Class}></div>
}

const LoginForm = () => {
  const { handleLogin, setNav, setHead } = useContext(OrderContext)
  const [errorMsg, setErrorMsg] = useState('')
  const [user, setUser] = useState({ username: '', password: '' })

  useEffect(() => {
    let nav = [
      // <Form.Label className='logo'> </Form.Label>,
      <Div Class='logo' />,
      'webinfosoftwares@gmail.com',
      <Div />,
      '9387303270',
    ]
    let navbar = [nav, '']
    let heading = ['Welcome!', 'text-info,d-inline-flex']

    setNav(navbar)
    setHead(heading)
  })

  const onSubmit = (event) => {
    event.preventDefault()
    const values = Object.values(user)
    let errorMsg = ''

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim()
      return value !== ''
    })

    if (allFieldsFilled) {
      console.log(user)
      handleLogin(user)
    } else errorMsg = 'Please fill out all the fields.'
    setErrorMsg(errorMsg)
  }

  const inputChange = (event) => {
    const { name, value } = event.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='main-form'>
      {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control
            className='icon-people input-control'
            value={user.username}
            placeholder='Username'
            onChange={inputChange}
            name='username'
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className='icon-password input-control'
            type='password'
            value={user.password}
            placeholder='Password'
            onChange={inputChange}
            name='password'
          />
        </Form.Group>
        <Button
          variant='default'
          type='submit'
          className='d-inline-flex justify-content-center border border-primary text-primary submit-btn'>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
