import styled from 'styled-components'
import { device } from '../../device'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media${device.mobileS }{
    flex: 0 0 100%;
  }
  @media${device.laptop }{
    flex: 0 0 auto;
  }
`
export const Img = styled.img`
  width: 300px;
  @media ${device.mobileS}{
    display: ${props => props.hide ? 'none' : 'inline'}
  }
  @media ${device.laptop}{
  display: block;
  }
  margin: 0 auto;
`
export const UserLink = styled(Link)`
  font-weight: bold;
  color: black
  text-decoration: none
`
