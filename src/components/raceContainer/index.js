import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRaces, fetchRacesSuccess, fetchRacesFailure } from '../../actions/getRaces'


class RaceContainer extends Component {
  componentDidMount(){
    this.props.fetchRaces()
  }
  render (){
    return(
      <ul>
      {this.props.races.map(race => {
        return <li key={race._id}><Link to={'/races/'+ race._id}>{race.srvsettings.date} {race.srvsettings.car} {race.srvsettings.track}</Link></li>
      })} 
      </ul>
    )
  }
} 

const mapStateToProps = state => ({ races: state.racesReducer.races })
const mapDispatchToProps = dispatch => ({
  fetchRaces: () => {
    dispatch( fetchRaces()).then(( response ) => {
      !response.error ?
        dispatch( fetchRacesSuccess( response.payload.data ) )
        : dispatch( fetchRacesFailure( response.payload.data ) )
    })
    .catch(err => console.log(err))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RaceContainer)
