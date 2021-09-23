import { Form, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import { useState, useEffect, useContext } from 'react'
import OrderContext from '../context/OrderContext'

const LoginForm = () => {
  const { handleLogin, setNav, setHead } = useContext(OrderContext)
  const [errorMsg, setErrorMsg] = useState('')
  const [user, setUser] = useState({ username: '', password: '' })
  let nav = ['webinfosoftwares@gmail.com', <p />, '9387303270']
  let navbar = [nav, 'icon-login']
  let heading = ['Welcome!', 'text-info,d-inline-flex']
  console.log(setNav)

  useEffect(() => {
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
            type='username'
            value={user.username}
            placeholder='Username'
            onChange={inputChange}
            name='Username'
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
