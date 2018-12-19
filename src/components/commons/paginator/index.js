import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import './stylePaginator.css'

class Paginator extends Component {
  render() {
    return(
      <ReactPaginate
        {...this.props }
        previousLabel={'<'}
        nextLabel={'>'}
        containerClassName={ 'containerCss' } 
        pageClassName= { 'pageLi' }
        pageLinkClassName= { 'linkA' }
        activeClassName= { 'activeCss' }
        activeLinkClassName= { 'activeLinkCss' }
        nextClassName={ 'pageLi' }
        previousClassName={ 'pageLi' }
        previousLinkClassName={ 'linkA' }
        nextLinkClassName= { 'linkA' }
        breakClassName={ 'pageLi' }
      />
    )
  }
}

export default Paginator
