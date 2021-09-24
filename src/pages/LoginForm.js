import { Form, Button } from 'react-bootstrap'
import { useState, useLayoutEffect, useEffect, useContext } from 'react'
import OrderContext from '../context/OrderContext'
import Div from '../components/Div'

const LoginForm = () => {
  const { handleLogin, setNav, setHead } = useContext(OrderContext)
  const [errorMsg, setErrorMsg] = useState('')
  const [user, setUser] = useState({ username: '', password: '' })

  useLayoutEffect(() => {
    let nav = [
      <Div Class='logo' />,
      <Div
        Content='webinfosoftwares@gmail.com'
        Class='container d-flex justify-content-center'
      />,
      <Div Content='9387303270' Class='d-flex' />,
    ]
    let navbar = [nav, 'align-content-center']
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
