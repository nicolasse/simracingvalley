import { device } from '../../../device'
import styled from 'styled-components'
import {mainColor} from '../style'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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
  padding: 0.8em 1em;
  vertical-align: top;
  @media ${device.mobileS}{
    font-size: 0.8em;
    ${props => props.hide ? 'display: none' : 'display: table-cell'};
    padding: 0.3em 0.3em;
  }
  @media ${device.laptop}{
    font-size: 1em;
    padding: 0.5em 0.8em;
    display: table-cell;
  }
  text-align: center;

`
export const Th = styled.th`
  padding: 0.8em 1em;
  @media ${device.mobileS}{
    font-size: 0.8em;
    ${props => props.hide ? 'display: none' : 'display: table-cell'};
    padding: 0.3em 0.3em;
  }
  @media ${device.laptop}{
    display: table-cell;
    font-size: 1em;
    padding: 0.5em 0.8em;
  }
  vertical-align: top;
  text-align: center;

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
