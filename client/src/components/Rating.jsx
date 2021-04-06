import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Rating = (props) => {
  const { requestor_id, volunteer_id } = props.location.state.ticket

  const thumbsUp = () => {
    if (props.user.isVolunteer === true) {
      axios.put('/api/ratings/thumbsUp', {firebase_id: requestor_id})
      .then(() => (alert('Vote Submitted')))
      .catch((err) => (console.log(err)))
    } else {
      axios.put('/api/ratings/thumbsUp', {firebase_id: volunteer_id})
      .then(() => (alert('Vote Submitted')))
      .catch((err) => (console.log(err)))
    }
    console.log('helloooo')
    // <Link to={{pathname: "/"}}></Link>
  }

  const thumbsDown = () => {
    if (props.user.isVolunteer === true) {
      axios.put('/api/ratings/thumbsDown', {firebase_id: requestor_id})
      .then(() => (alert('Vote Submitted')))
      .catch((err) => (console.log(err)))
    } else {
      axios.put('/api/ratings/thumbsDown', {firebase_id: volunteer_id})
      .then(() => (alert('Vote Submitted')))
      .catch((err) => (console.log(err)))
    }
    // <Link to={{pathname: "/"}}></Link>
  }

  return (
    <div>
      <h2>Please Rate Your {props.user.isVolunteer ? 'Requester' : 'Volunteer'}</h2>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <h4>Thumbs Up!</h4>
          <Link to={{pathname: "/"}}>
            <i onClick={thumbsUp} className="far fa-thumbs-up fa-10x"></i>
          </Link>
          {props.user.isVolunteer ? <p>Your requester was polite and appreciative and you would love to volunteer for them again.</p> : <p>Your volunteer was helpful and polite and you would love to have them as your volunteer again.</p>}
        </div>
        <div>
          <h4>Thumbs Down!</h4>
          <Link to={{pathname: "/"}}>
            <i onClick={thumbsDown} className="far fa-thumbs-down fa-10x"></i>
          </Link>
          {props.user.isVolunteer ? <p>Your requester was not polite and you wish to not volunteer for them again.</p> : <p>Your volunteer was not helpful and you wish to not have them as your volunteer again.</p>}
        </div>
      </div>
    </div>
  )
}

export default Rating