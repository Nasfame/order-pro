import { Form, Button } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { OrderContext } from '../context'
import { Div, Nav, Header } from '../components'

const LoginForm = () => {
  const { handleLogin } = useContext(OrderContext)
  const [errorMsg, setErrorMsg] = useState('')
  const [user, setUser] = useState({ username: '', password: '' })

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
    <>
      <Nav Class='flex-column justify-content-center align-items-center py-5'>
        <Div Class='logo my-2' />
        <Div>webinfosoftwares@gmail.com</Div>
        <Div>9387303270 </Div>
      </Nav>
      <Header Class='text-primary'>Welcome!</Header>

      <div className='container-fluid justify-content-center'>
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
    </>
  )
}

export default LoginForm
