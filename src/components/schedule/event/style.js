import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Li = styled.li`
  flex: 1 1 auto;
  list-style: none;
`

export const Participants = styled.ul`
  border: 1px solid grey;
  width: 720px;
  display: flex;
  flex-flow: row wrap;
  height: 10em;
  overflow-y: auto;
  padding: 1em;
  align-content: start;
`
export const ClassImg = styled.img`
  width: 300px;
`


export const UserLink = styled(NavLink)`
  font-weight: bold; 
  text-decoration: none;
  color: black;
`
export const Info = styled.div`
  display: flex;
  flex-flow: column wrap;
`
export const Status = styled.span`
  border-radius: 1em;
  color: white;
  font-style: italic;
  color: ${ props => props.online ? '#5cb85c':'red' };
  text-align: center;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  padding: 0.5em 1em;
  appearance: none;
  border: none;
  border-radius: 0.25em
  background: ${ props => props.info ? '#286090' : '#5cb85c' };
  color: white;
  margin: 1em;
  ${ props => props.disabled && `background: grey` }
`
export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  padding: 2em 0em;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 1px solid grey;
  margin-top: 2em;
`

