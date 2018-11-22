import { device } from '../../../device'
import styled from 'styled-components'
import {mainColor} from '../style'

export const Table = styled.table`
  border-collapse: collapse;
  @media ${device.mobileS}{
    width: 100%;
    margin: 10px auto 15px auto;
  }
  @media ${device.laptop}{
    width: 100%;
    margin: 10px auto 50px auto;
  }
  overflow-y: auto;
  ${props => props.hide ? 'display: none' : null}
`

export const Thead = styled.thead`
  font-size: 1em;
  width: 100%
  overflow: auto;
  background: #fff;
  border-bottom: 5px solid gray
`

export const Tbody = styled.tbody`
  margin-top: 50px;
`

export const Td = styled.td`
  text-align: ${props => props.right ? 'right' : 'left'};
  padding: 0.8em 1em;
  vertical-align: top;
  @media ${device.mobileS}{
    font-size: 0.8em;
    ${props => props.hide ? 'visibility: collapse' : 'visibility: visible'};
    padding: 0.3em 0.3em;
  }
  @media ${device.laptop}{
    visibility: visible;
    font-size: 1em;
    padding: 0.5em 0.8em;
  }

`
export const Th = styled.th`
  text-align: ${props => props.center ? 'center' : 'left'};
  padding: 0.8em 1em;
  @media ${device.mobileS}{
    font-size: 0.8em;
    ${props => props.hide ? 'visibility: collapse' : 'visibility: visible'};
    padding: 0.3em 0.3em;
  }
  @media ${device.laptop}{
    visibility: visible;
    font-size: 1em;
    padding: 0.5em 0.8em;
  }

`

export const Tr = styled.tr`
  background: white;
  cursor: default;
  &:nth-child(odd){
  background: #f2f2f2;
  }
  &:hover{
    ${props => props.hover ? 'background:'+ mainColor +'; color: white;' : null}

  }

`
