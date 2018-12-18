import { Link } from 'react-router-dom'
import { device } from '../../device'
import styled from 'styled-components'
import { mainBlue } from '../commons/style'

export const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  ${props => props.record
  ?'&:hover{color: white; }'
  : '&:hover{ color:'+ mainBlue}

`
export const Wrapper = styled.div`
  position: relative;
  text-align: center;
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: 75%;
  }
  margin: 0 auto;
  min-height: 80vh;
  
`

export const Select = styled.select`
  width: 100%;
  background: transparent;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  appearance:none;
`
