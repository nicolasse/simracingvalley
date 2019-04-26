import styled from 'styled-components'
import { Participants } from '../style'


export const Ul = styled(Participants)`
 flex-flow: column nowrap; 
 align-items: first baseline;
  list-style: none;
  display: ${ props => props.hide ? 'none' :  'block' }
  ${ props => props.hide ? 'height: 0' : 'height: 100px' } 
  transition: max-height 0.25s ease-in;
`
