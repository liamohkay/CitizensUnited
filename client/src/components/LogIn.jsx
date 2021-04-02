import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const LogIn = () => {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const emailInput = (e) => {
    updateEmail(e.target.value)
    console.log(email)
  }

  const passwordInput = (e) => {
    updatePassword(e.target.value)
    console.log(password)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type ="email" value={email} onChange={emailInput} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type ="password" value={password} onChange={passwordInput} required />
            </Form.Group>
            <Button className="w-100" type="submit">Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2"></div>
    </>
  )
}

export default LogI