import React, { Component } from 'react'
import { searchDriver } from '../../../actions/getRanking'
import { connect } from 'react-redux'
import Input from './Input'

class FilterName extends Component {

  handleChange = ( e ) => {
    let name = e.target.value
    if( name.length > 2){
      this.props.searchDriver( name )
      this.props.filterToggle( true )
    }
    else
      this.props.filterToggle( false )
  }

  render(){
    return (
      <Input placeholder='Filtre por Nome' onChange={this.handleChange}/>
    )
  }
}

const mapStateToProps = state => ({state: state.rankingReducer })
const mapDispatchToProps = dispatch => ({
  searchDriver: ( name ) => {
    dispatch( searchDriver(name) )
  }
})
export default connect( mapStateToProps, mapDispatchToProps )(FilterName)
