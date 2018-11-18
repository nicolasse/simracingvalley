import React, { Component } from 'react'
import styled from 'styled-components'
import { mainColor, boldColor } from '../commons/style'
import ReactPaginate from 'react-paginate'
import stylePaginator from './stylePaginator.css'

class Paginator extends Component {
  render() {
    return(
      <ReactPaginate
       {...this.props }
        containerClassName={ 'containerCss' } 
        pageClassName= { 'pageLi' }
        pageLinkClassName= { 'linkA' }
        activeClassName= { 'activeCss' }
        activeLinkClassName= { 'activeLinkCss' }
      nextClassName={ 'pageLi' }
      previousClassName={ 'pageLi' }
      previousLinkClassName={ 'linkA' }
      nextLinkClassName= { 'linkA' }
      />
    )
  }
}


const Container = styled.div`
  margin-bottom: 30px;
  display: ${props => props.hide ? 'none' : 'flex'};
  justify-content: center;
  width:100%;
  height: 50px;
`

const NumberPage = styled.button`
  ${props => props.current
  ? 'background:' + mainColor
  : 'background: white;'}
  ${props => props.hide
  ? 'display: none'
  : 'display: flex'}
  color: black;
  font-size: 0.9em;
  border: none;
  border-right: 1px solid black;
  &:hover{
    color: white;
    background: ${boldColor}
  };
  width: 40px;
  justify-content: center; 
  align-items: center;
  &:last-child{
   border-right: none;
  }
`

const NoPage = styled.span`
  display: flex;
  color: black;
  font-size: 0.9em;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;

`

export default Paginator
