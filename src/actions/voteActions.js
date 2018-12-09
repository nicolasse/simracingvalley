import axios from 'axios'

export const VOTE_DRIVER_STARTED = 'VOTE_DRIVER_STARTER'
export const VOTE_DRIVER_SUCCESS = 'VOTE_DRIVER_SUCCESS'
export const VOTE_DRIVER_FAILURE = 'VOTE_DRIVER_FAILURE'

export const voteDriver = (race, driver, token) => {
  let request = {
    method: 'POST',
    url: '/api/races/' + race +'/vote/' + driver,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    } 
  }
  
  return dispatch => {
    dispatch( voteDriverStarted() )
    axios( request )
      .then( res => {
        dispatch(voteDriverSuccess( res.data ))
      } )
      .catch( err => {
        dispatch(voteDriverFailure( err.response.data.message ))
      } )
  }
}

const voteDriverStarted = () => ({
  type: VOTE_DRIVER_STARTED,
})

const voteDriverSuccess = ( response ) => {
  return {
    type: VOTE_DRIVER_SUCCESS,
    payload: response,
  }
}

const voteDriverFailure = ( error ) => {
  return {
    type: VOTE_DRIVER_FAILURE,
    payload: error,
  }
}
