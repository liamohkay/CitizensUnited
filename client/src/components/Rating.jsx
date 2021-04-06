import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Rating = () => {

  const thumbsUp = () => {
    axios.put('/api/ratings/thumbsUp', {firebase_id: '1KFX1nJzwbVvWXVOttsLlc5e3Tu1'})
    .then(() => (alert('Vote Submitted')))
    .catch((err) => (console.log(err)))
  }

  const thumbsDown = () => {
    axios.put('/api/ratings/thumbsDown',{ firebase_id:  '1KFX1nJzwbVvWXVOttsLlc5e3Tu1'})
    .then(() => (alert('Vote Submitted')))
    .catch((err) => (console.log(err)))
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