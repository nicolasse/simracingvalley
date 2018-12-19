import styled from 'styled-components'
import { device } from '../../../device'
import { mainBlue, mainGreen } from '../../commons/style'

export const ButtonClose = styled.button`
  border: 1px solid black;
  @media ${device.mobileS}{
    display: block;
    background: white;
  }
  @media ${device.laptop}{
    display: none;
  }
  padding: 1em;
`

export const Content = styled.div`
  @media ${device.mobileS}{
    display: ${props => props.hide ? 'none' : 'block'}
  }
  @media ${device.laptop}{
    display: block;
    position: relative
  }
  height: 100%;
  width: 100%;
  background: white;
`

export const Img = styled.div`
  width: 100%;
  height: 100%;
  background: ${ mainBlue };
  box-sizing: border-box;

  @media ${device.mobileS}{
    border-left: 0;
  }
  @media ${device.laptop}{
    border-left: 5px solid black;
  }

`
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  @media ${device.mobileS}{
    border-left: 0;
    font-size: 0.77em;
  }
  @media ${device.laptop}{
    border-left: 5px solid black;
    font-size: 1em;
  }
  box-sizing: border-box;
`
export const Thead = styled.thead`
  overflow: auto;
  background: #fff;
`

export const Tbody = styled.tbody`

  overflow: auto;
`
export const Td = styled.td`
  box-sizing: border-box;
  text-align: ${props => props.right ? 'right' : 'left'};
  vertical-align: top;
  color: ${props => props.best ? mainGreen : 'black'}
  font-weight: ${props => props.best ? 'bold' : 'normal'}
  @media ${device.mobileS}{
    font-size: ${props => props.hideOnMobile ? '0px' : '1em'};
    padding: 0.8em 0.1em;
  }
  @media ${device.laptop}{
    font-size: 1em;
  padding: 0.8em 0.5em;
  }
`
export const Th = styled.th`
  text-align: ${props => props.center ? 'center' : 'left'};
  @media ${device.mobileS}{
    font-size: ${props => props.hideOnMobile ? '0px' : '1em'}
    padding: 0.8em 0.1em;
  }
  @media ${device.laptop}{
    font-size: 1em;
  padding: 0.8em 0.5em;
  }

`

export const Tr = styled.tr`
  background: white;
`
