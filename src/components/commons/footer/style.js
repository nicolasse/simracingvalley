import styled from 'styled-components'
import { device } from '../../../device'

export const Wrapped = styled.div`
  display: flex;
  flex: 1 2 85%;
  flex-flow: column;

`
export const Title = styled.h1`
  font-size: 1em;
  color: white;
`

export const TitlePopUp = styled.h1`
  font-size: 2em;
  margin-top: 2em;
`

export const Signature = styled.a`
  font-style: italic;
  font-decoration: none;
  color: #000;
`
export const P = styled.p`
  line-height: 2em;
`

export const MailTo = styled.a`
  text-decoration: none;
  color: grey;
`

export const Foot = styled.footer`
  display: flex;
  margin-top: 5em;
  background-color: #303036;
  flex: 1;
  @media ${device.mobileS}{
    font-size: 0.7em;
    flex-flow: column nowrap;
  }
  @media ${device.laptop}{
    font-size: 0.75em;
    flex-flow: row wrap;
  }
`
export const CopyRight = styled.div`
  self-align: flex-end;
  color: white;
`

export const Ul = styled.ul`
  list-style-type: none;
  display: table-cell;
  margin: 0;
  padding: 0;
`


export const Li = styled.li`
  vertical-align: middle;
  cursor: pointer;
  margin-top: 0.8em;
`

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`
export const Section = styled.div`
  @media${device.mobileS}{
  ${props => props.primary
  ? 'display: none'
  : 'flex: 1 0 auto;'}
  }
  @media${device.laptop}{
  display: block;
  ${props => props.primary 
  ? 'flex: 0 0 20%'
  :'flex: 0 0 auto;'
  }

  }
  color: #6b6d6f;
  margin: 30px;
`
