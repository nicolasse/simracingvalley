import { device } from '../../../device'
import styled from 'styled-components'
import {mainBlue, thinBlue} from '../style'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-y: auto;
  font-size: 4vw;
  @media${device.mobileS}{
    font-size: 1.2em;

  }
  @media${device.laptop}{
     font-size: 1em;
  }
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
  vertical-align: top;
  @media ${device.mobileS}{
    font-size: 0.8em;
    ${props => props.hide ? 'display: none' : 'display: table-cell'};
    padding: 0.3em 0.1em;
  }
  @media ${device.laptop}{
    font-size: 1em;
    padding: 0.5em 0.2em;
    display: table-cell;
  }
  text-align: center;

`
export const Th = styled.th`
  @media ${device.mobileS}{
    font-size: 0.8em;
    ${props => props.hide ? 'display: none' : 'display: table-cell'};
    padding: 0.3em 0.1em;
  }
  @media ${device.laptop}{
    display: table-cell;
    font-size: 1em;
    padding: 0.5em 0.2em;
  }
  vertical-align: bottom;
  text-align: center;

`

export const Tr = styled.tr`
  cursor: default;
  ${props => props.cdc
    ? 'background: linear-gradient(to right,#333333 0%,  #ffc800 30%,#333333 100%);color: white;'
    : 'background: white;&:nth-child(odd){ background:' + thinBlue+'; }'
  }
  &:hover{
    ${props => props.hover ? 'background:'+ mainBlue +'; color: white;' : null}
  }

`
