import styled from 'styled-components'
import { device } from '../../../device'

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS}{
  flex: 100%;
  }
  @media ${device.laptop}{
    flex: 50%;
  }
`
export const Text = styled.label`
  text-size: 20px;
  color: black;
`

export const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  top: 0;
`

export const Inner = styled.div`
  margin: 0 auto;
`

export const Form = styled.form`
  @media ${device.mobileS}{
    padding: 0;
  }
  @media ${ device.laptop }{
    padding: 5em;
  }
  display: flex;
  flex-flow: row wrap;
`
export const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  margin: 0.5em;
  color: #333;
  border: 1px solid black;
  border-radius: 3px;
`
export const Select = styled.select`
  font-size: 20px;
  padding: 10px;
  margin: 0.5em
  color: #333;
  background: white;
  border: 1px solid black;
  border-radius: 3px;

`
export const Button = styled.input.attrs({type: 'submit'})`
  color: #fff;
  background: #337ab7;
  border: 1px solid black;
  padding: 10px;
  margin: 0.5em auto;;
  border-radius: 3px;
  font-size: 1.2em;
  width: 200px;
`
