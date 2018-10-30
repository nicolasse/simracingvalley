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
    return arr
  }

  render() {
    return(
      <Wrapper>
      <h1>Bem vindo {this.props.user.username}!</h1>
        <Inner>
          <Form onSubmit= {this.handleSubmit}>
              <Field>
             <Text> Email*</Text>
            <Input name='email' placeholder='example@my-email.com' type='text' required onChange={this.handleChange} />
              </Field>
              <Field>
              <Text>Nome*</Text>
            <Input name='name' type='text' required onChange={this.handleChange}/>
              </Field>
              <Field>
             <Text>Sobrenome*</Text>
            <Input name='lastname' type='text' required onChange={this.handleChange}/>
              </Field>
              <Field>
              <Text>Sobre Você</Text>
             <Input name='about' type='text' onChage={this.handleChange} />
              </Field>
              <Field>
              <Text>Frase do Perfil</Text>
              <Input name='phrase' type='text' onChange={this.handleChange}/>
              </Field>
              <Field>
              <Text>Sexo</Text>
            <Select name='sex' onChange={this.handleChange}>
              <option key='m' value='M'>Homem</option>
              <option key='f' value='F'>Mulher</option>
            </Select>
              </Field>
              <Field>
              <Text>Data de Nascimento</Text>
            <Input name='birthday' type='date' onChange={this.handleChange}/>
              </Field>
              <Field>
              <Text>Estado</Text>
              <Select name='state' onChange={this.handleChange}>
                {
                  
                  STATES.map((state, index) => {
                    return <option key={index} value={state.value} >{state.name}</option>
                  })
                }
              </Select>
              </Field>
              <Field>
              <Text>Cidade</Text>
            <Input name='city' type='text' onChange={this.handleChange}/>
              </Field>
            <Button  value='Entrar'/>
          </Form>
        </Inner>
      </Wrapper>
    )
  }
}

const Field = style.div`
  margin: 0.5em;
  display: flex;
  flex: 30%;
  flex-direction: column;
`
const Text = style.label`
  text-size: 20px;
  color: black;
`

const Wrapper = style.div`
  margin: 0;
  width: 100%;
  top: 0;
`

const Inner = style.div`
  margin: 0 auto;
`

const Form = style.form`
  padding: 5em;
  display: flex;
  flex-flow: row wrap;
`
const Input = style.input`
  font-size: 20px;
  padding: 10px;
  margin: 0.5em;
  color: #333;
  border: 1px solid black;
  border-radius: 3px;
`
const Select = style.select`
  font-size: 20px;
  padding: 10px;
  margin: 0.5em
  color: #333;
  background: white;
  border: 1px solid black;
  border-radius: 3px;

`
const Button = style.input.attrs({type: 'submit'})`
  color: #fff;
  background: #337ab7;
  border: 1px solid black;
  padding: 10px;
  margin: 0.5em auto;;
  border-radius: 3px;
  font-size: 1.2em;
  width: 200px;
`
const mapStateToProps = state => ({ user: state.userReducer })

export default connect(mapStateToProps, null)(withRouter(UserForm))
