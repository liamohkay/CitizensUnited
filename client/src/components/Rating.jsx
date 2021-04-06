// Libraries + dependencies
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Rating = ({ ticket, partnerID }) => {
  const history = useHistory();

  // Marks task complete in database
  const markTaskComplete = () => {
    let params = { _id: ticket._id }
    axios.put('/api/tasks/completed', { params })
      .catch(err => console.log(err))
  }

  const thumbsUp = () => {
    axios.put('/api/ratings/thumbsUp', { firebase_id: partnerID })
    .catch((err) => (console.log(err)))
    .then(() => (alert('Vote Submitted')))
    .then(() => markTaskComplete())
    .then(() => history.push('/'))
  }

  const thumbsDown = () => {
    axios.put('/api/ratings/thumbsDown',{ firebase_id: partnerID} )
    .catch((err) => (console.log(err)))
    .then(() => (alert('Vote Submitted')))
    .then(() => markTaskComplete())
    .then(() => history.push('/'))
  }

  return (
    <div>
      <h2>Please Rate Your Volunteer</h2>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <h4>Thumbs Up!</h4>
          <i onClick={thumbsUp} className="far fa-thumbs-up fa-10x"></i>
          <p>Your volunteer was helpful and polite and you would love to have them as your volunteer again.</p>
        </div>
        <div>
          <h4>Thumbs Down!</h4>
          <i onClick={thumbsDown} className="far fa-thumbs-down fa-10x"></i>
          <p>Your volunteer was not helpful and you wish to not have them as your volunteer again.</p>
        </div>
      </div>
    </div>
  )
}

export default Rating