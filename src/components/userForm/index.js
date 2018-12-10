import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from 'styled-components'
import { connect } from 'react-redux'
import { STATES } from '../../statesBr'
import { fetchUser } from '../../actions/userActions'
import { device } from '../../device'

class UserForm extends Component {

    email = React.createRef()
    name = React.createRef()
    lastname= React.createRef()
    about = React.createRef()
    phrase = React.createRef()
    gender = React.createRef()
    city = React.createRef()
    state = React.createRef()
    birthday = React.createRef()
    avatar = React.createRef()

  handleSubmit = (e) =>{
    let userData = {
      email: this.email.current.value,
      name: this.name.current.value,
      lastname: this.lastname.current.value,
      about: this.about.current.value,
      phrase: this.phrase.current.value,
      gender: this.gender.current.value,
      city: this.city.current.value,
      state: this.state.current.value,
      birthday: this.birthday.current.value,
      avatar: this.avatar.current.value,
    }
    e.preventDefault()
    fetch('/api/users/' + this.props.user.userId , {
      method: 'PUT',
      headers: {
            'Content-Type': 'application/json',
            'x-access-token': this.props.user.token
      },
      mode:'cors',
      body: JSON.stringify(userData)
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


  selectState(){
    let arr = []
    for(let key in STATES){
      arr[key] = STATES[key]
    }
    return arr
  }

  dateInputFormat =(oldFormat) =>{
    try{
      let newFormat =  oldFormat.substring(6,10)+'-'+oldFormat.substring(3,5)+'-'+oldFormat.substring(0,2)
      return newFormat
    }
    catch(err){
      return ''
    }
  }

  componentWillMount(){
      let id = this.props.user.userId
      this.props.fetchUser( id )
  }

  render() {
    let user = this.props.user.user
    return(
      <Wrapper>
      {
        this.props.user.email_confirmed ?
          <h1>Editar Perfil</h1>
          : <h1>Bem vindo {this.props.user.username}!</h1>
      }
        <Inner>
          <Form onSubmit= {this.handleSubmit}>
              <Field>
             <Text> Email*</Text>
            <Input name='email' innerRef={this.email} placeholder='example@my-email.com' defaultValue={user.email} type='text' required  />
              </Field>
              <Field>
              <Text>Nome*</Text>
            <Input name='name' innerRef={this.name} type='text' defaultValue={user.name} required />
              </Field>
              <Field>
             <Text>Sobrenome*</Text>
            <Input name='lastname' innerRef={this.lastname} type='text' defaultValue={user.lastname} required />
              </Field>
              <Field>
              <Text>Sobre Você</Text>
             <Input name='about' innerRef={this.about} type='text' defaultValue={user.name} />
              </Field>
              <Field>
              <Text>Frase do Perfil</Text>
              <Input name='phrase' innerRef={this.phrase} type='text' defaultValue={user.phrase} />
              </Field>
              <Field>
              <Text>Sexo</Text>
            <Select defaultValue={user.gender} innerRef={this.gender} name='gender' >
              <option key='m' value='M'>Homem</option>
              <option key='f' value='F'>Mulher</option>
            </Select>
              </Field>
              <Field>
              <Text>Data de Nascimento</Text>
            <Input name='birthday' type='date' innerRef={this.birthday} defaultValue={this.dateInputFormat(user.birthday)}/>
              </Field>
              <Field>
              <Text>Estado</Text>
              <Select name='state' value={user.state} innerRef={this.state} >
                {
                  
                  STATES.map((state, index) => {
                    return <option key={index} value={state.value} >{state.name}</option>
                  })
                }
              </Select>
              </Field>
              <Field>
              <Text>Cidade</Text>
            <Input name='city' type='text' defaultValue={user.city} innerRef={this.city}/>
              </Field>
              <Field>
                <Text>Avatar URL</Text>
                <Input name='avatar' type='text' innerRef={this.avatar} defaultValue={user.avatar} />
              </Field>
            <Button  value='Entrar'/>
          </Form>
        </Inner>
      </Wrapper>
    )
  }
}

const Field = style.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS}{
  flex: 100%;
  }
  @media ${device.laptop}{
    flex: 50%;
  }
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
  @media ${device.mobileS}{
    padding: 0;
  }
  @media ${ device.laptop }{
    padding: 5em;
  }
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

const mapDispatchToProps = dispatch => ({
  fetchUser: ( id ) => {
    dispatch( fetchUser( id ) )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserForm))
