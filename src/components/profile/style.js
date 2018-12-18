import styled from 'styled-components'
import { device } from '../../device'
import { NavLink } from 'react-router-dom'
import { mainBlue } from '../commons/style'

export const Data = styled.span`
  color: gray;
  font-size: 0.85em
`
export const Phrase = styled.p`
 ${props => props.hide ? 'display: none': ''} 
  padding: 0.3em 2em;
  margin-left: 5px;
  margin-top: auto;
  margin-bottom: 0;
  background: #f5e6b5;
  color: #665723;
  text-align: center;
  border-radius: 5px;

`

export const Button = styled(NavLink)`
  margin-left: auto;
  margin-top: auto;
  height: 15px;
  font-size: 0.8em;
  font-weight: bold;
  text-decoration: none;
  background: white;
  color: black;
  transition: all 0.3s linear;
  border: 1px solid black;
  &:hover{
    background: ${props => props.type === 'warning' ? '#DC143C' : '#337ab7'}
    color: white;
    transition: all 0.3s linear;
  }
  padding: 0.5em;
  border-radius: 3px;
`

export const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0;
`

export const Name = styled.h1`
  font-size: 1.5em;
  color: white;
  background: black;
  width: 100%
  margin-top: 5px;
  margin-bottom: 0;
`
export const Tbody = styled.tbody`
  margin: 10px;
  padding: 10px;
`
export const Thead = styled.thead`
  width: 100%;

`

export const ImgClass = styled.img`
  max-width: 250px;
`
export const Td = styled.td`
  @media${ device.mobileS }{
    ${props => props.hide 
    ? 'display: none'
    : 'display: table-cell'}
  }
  @media ${ device.laptop }{
    display: table-cell;
  }
  margin: 10px;
  padding: 5px;
  text-align: center;
`

export const Th = styled.th`
  @media${ device.mobileS }{
    ${props => props.hide 
    ? 'display: none'
    : 'display: table-cell'}
  }
  @media ${ device.laptop }{
    display: table-cell;
  }
  margin: 1vw auto;
  padding: 0.5vw;
`

export const Table = styled.table`
  margin: 0;
  padding: 0.5vw;
  font-size: 1em;
  width: 100%;
  background: ${mainBlue}
  color: white;

`

export const StatsSection = styled.div`
  @media ${device.mobileS}{
   font-size: 0.8em;
   flex-flow: row wrap;
  }
  @media ${device.laptop}{
    font-size: 1em;
    flex-direction: row wrap;
  }
  border-radius: 5px;
  margin-left: 5px;
  display: flex;
`

export const Information = styled.ul`
  display: flex;
  flex-flow:row wrap;
  list-style-type: none
  margin-top: 5px;
`
export const Li = styled.li`
  @media ${device.mobileS}{
    flex: 1 0 90% 
  }
  @media ${device.mobileL}{
    flex: 1 2 40%;
  }
  padding: 5px;
  font-size: 0.9em;
`

export const Wrapper = styled.div`
  @media ${device.mobileS}{
  }
  @media ${device.laptop}{
    margin-top: 90px
    margin: 0 auto;
  }
  background: #f4f4f4
`

export const ProfileBox = styled.div`
  @media ${device.mobileS}{
    flex-direction: column;
    height: 100%;
  }
  @media ${device.mobileL}{
    flex-flox: row wrap;
  }
  @media ${device.laptop}{
    flex-direction: row;
    max-height: 350px;
  }
  box-shadow:  0 0 10px 5px rgba(0, 0, 0, 0.19);
  background: white
  padding: 5px
  border-radius: 5px
  display: flex;
`
export const Avatar = styled.img`
  background: #f0f0f0;
  @media ${device.mobileS}{
  width: 200px;
  margin: 0 auto;
  }
  @media ${device.mobileM}{
    width: 100px;
    height: 100px;
  }
  @media ${device.laptop}{
  min-width: 300px;
  height: 300px;
  }
  border-radius: 5px
`
