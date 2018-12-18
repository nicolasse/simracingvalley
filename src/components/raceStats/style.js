import { mainBlue } from '../commons/style'
import { device } from '../../device'
import styled from 'styled-components'

export const Info = styled.ul`
  font-size: 1.3em;
  margin: 0 auto 0 0;
  display: table;
`

export const Span = styled.span`
  ${props => props.rated 
  ?'background: #66B756; color: white; border-radius: 5px; padding: 0.2em 1em'
  :'background: #FF7676; color: white; border-radius: 5px; padding: 0.2em 1em'}

`
export const Config = styled.li`
  list-style-type: none;
  margin-bottom: 0.3em;

`

export const Content = styled.div`
  width: 100%;
  @media ${device.mobileS}{
    display: block;
  }
  @media ${device.laptop}{
    display: flex;
  }
`

export const Title = styled.h1`
  color: black;
  @media ${device.mobileS}{
    display: ${props => props.hideOnMobile ? 'none' : 'block'}
  }
  @media ${device.laptop}{
    display: block;
  }
`

export const ButtonEvent = styled.button`
  ${ props => props.activated
  ? 'color: white; background:' +mainBlue 
  : 'color: black; background: white' };
  @media${device.mobileS}{
    font-size: 1em;
  }
  @media${device.laptop}{
    font-size: 1.2em;
  
  }
  border: 1px solid black;
  margin: 10px 10px 10px 0;
  padding: 1em;

  &:active, &:hover {
   background: ${ mainBlue };
   color: white;
  }

`

export const Col = styled.div`
  @media ${device.mobileS}{
    width: 100%
    display: block;
  }
  @media ${ device.laptop }{
    width: 50%;
    float: left;
    display: flex;
    flex-flow: column;
  }
  margin: 0;
`

export const Wrapper = styled.div`
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: 100%;
  }
  margin: 0 auto;
`
