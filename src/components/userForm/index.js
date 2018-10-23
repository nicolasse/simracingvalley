import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from 'styled-components'
import { connect } from 'react-redux'
import { STATES } from '../../statesBr'
class UserForm extends Component {
  constructor(props){
    super(props)
  this.state={
    email: '',
    name:'',
    lastname:'',
    about:'',
    phrase: '',
    gender:'',
    city:'',
    state:'',
    birthday:''


  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:8080/users/' + this.props.user.userId , {
      method: 'PUT',
      headers: {
            'Content-Type': 'application/json',
            'x-access-token': this.props.user.token
      },
      mode:'cors',
      body: JSON.stringify(this.state),
    }).then(res =>
      res.json()
    )
    .then(response => {
      if(response.saved)
        this.props.history.push('/drivers/' + this.props.user.userId)
    }
    )
      .catch(err => console.log(err))

  }

  handleChange(e){
    const target = e.target
    const value = target.value //  'text' ? target.value : target.checked
    const name = target.name

    this.setState({
      [name]:value
    })
  }

  selectState(){
    let arr = []
    for(let key in STATES){
      arr[key] = STATES[key]
    }
    console.log(STATES)
    console.log(arr)
    return arr
  }

  render() {
    return(
      <Wrapper>
      <h1>Bem vindo {this.props.user.username}!</h1>
        <Inner>
          <Form onSubmit= {this.handleSubmit}>
              <Field>Email
            *<Input name='email' placeholder='example@my-email.com' type='text' required onChange={this.handleChange} />
              </Field>
              <Field>Nome
            *<Input name='name' type='text' required onChange={this.handleChange}/>
              </Field>
              <Field>Sobrenome
            *<Input name='lastname' type='text' required onChange={this.handleChange}/>
              </Field>
              <Field>Sobre Você
             <Input name='about' type='text' onChage={this.handleChange} />
              </Field>
              <Field>Frase do Perfil
            <Input name='phrase' type='text' onChange={this.handleChange}/>
              </Field>
              <Field>Sexo
            <Input name='sex' type='text' onChange={this.handleChange}/>
              </Field>
              <Field>Data de Nascimento
            <Input name='birthday' type='date' onChange={this.handleChange}/>
              </Field>
              <Field>Estado
              <Select name='state' onChange={this.handleChange}>
                {
                  
                  STATES.map(state => {
                    return <option value={state.value} >{state.name}</option>
                  })
                }
              </Select>
              </Field>
              <Field>Cidade
            <Input name='city' type='text' onChange={this.handleChange}/>
              </Field>
            <Button  value='Entrar'/>
          </Form>
        </Inner>
      </Wrapper>
    )
  }
}

const Field = style.label`
  text-size: 1em;
  color: black;
  flex: 40%;
`

const Wrapper = style.div`
  margin: 0;
  width: 100%;
  heigth: 100%;
  top: 0;
`

const Inner = style.div`
  margin: 0 auto;
  display: flex;
`

const Form = style.form`
  padding: 5em;
  display: flex;
  flex-wrap: wrap;
`
const Input = style.input`
  font-size: 1.2em;
  padding: 0.5em;
  margin: 0.5em;
  color: #333;
  border: 1px solid black;
  border-radius: 3px;
`
const Select = style.select`
  font-size: 1.2em;
  padding: 0.5em;
  margin: 0.5em
  color: #333;
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  flex: 30%;
`
const Button = style.input.attrs({type: 'submit'})`
  color: #fff;
  background: #337ab7;
  border: 1px solid black;
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  font-size: 1.2em;
  flex: 30%;
`
const mapStateToProps = state => ({ user: state.userReducer })

export default connect(mapStateToProps, null)(withRouter(UserForm))
