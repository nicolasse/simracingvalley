import styled from 'styled-components'
import { device } from '../../../device'
import { Link } from 'react-router-dom'
import { lightBlue, mainBlue } from '../../commons/style'

export const UserLink = styled(Link)`
  font-weight: bold;
  color: black
  text-decoration: none
`

export const Table = styled.table`
  @media${device.mobileS}{
  ${props => props.hide ? 'display:none' : 'display: table'}
  font-size: 0.8em;
  }
  @media${device.laptop}{
    display: table; 
  font-size: 1em;
  }
  border-collapse: collapse;
  width: 100%;
  float: left;
  margin: 0 auto;
`

export const Thead = styled.thead`
  width: 100%;
  overflow: auto;
  background: #fff;
`

export const Tbody = styled.tbody`
  overflow: auto;
`

export const Td  = styled.td`
  text-align: ${props => props.right ? 'right' : 'left'};
  text-align: center;
  vertical-align: top;
  ${props => props.hide ? 'display: none' : null}
  @media${device.mobileS}{
    padding: 0.8em 0.1em;
  }
  @media${device.laptop}{
    padding: 0.8em 0.5em;
  }
`
export const Th = styled.th`
  font-size: ${props => props.small ? '0.75em' :  '1em'};
  text-align: ${props => props.center ? 'center' : 'left'};
  text-align: center;
  ${props => props.hide ? 'display: none' : null}
  @media${device.mobileS}{
    padding: 0.8em 0.1em;
  }
  @media${device.laptop}{
    padding: 0.8em 0.5em;
  }
`

export const Tr = styled.tr`
  background: white;
  &:nth-child(odd){
    background:  #f0f5f5;
  }
  &:hover{
    background: ${ mainBlue };
    color: white;
  }
  &:active{
    background: ${lightBlue};
    color: white;
  }
`
