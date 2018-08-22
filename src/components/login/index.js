import React, { Component } from 'react'
import style from 'styled-components'

class Login extends Component {
  render() {
    return(
      <Popup>
        <Inner>
          <Form>
            <Input placeholder='Usuário' type='text' />
            <Input placeholder='Password' type='password' />
            <Submit value= 'ENTRAR' />
          </Form>
        </Inner>
      </Popup>
    )
  }
}

const Popup = style.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: auto;
  top: 0;
  background-color: rgba(0,0,0, 0.5);
`

const Inner = style.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 25%;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  background: #333;
  display: block;
`

const Form = style.form`
  margin: 0 auto;
  text-align: center;
  padding: 5em;
`
const Input = style.input`
  font-size: 1.2em;
  padding: 0.5em;
  margin: 0.5em;
  color: #333;
  background: #fff;
  border: none;
  border-radius: 3px;
`
const Submit = Input.extend.attrs({ type: 'submit' })`
  color: #fff;
  background: #337ab7;
  width: 302px;
`

export default Login
