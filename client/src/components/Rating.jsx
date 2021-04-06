import React from 'react'
import axios from 'axios'

const Rating = () => {
  return (
    <div>
      <h2>Please Rate Your Volunteer</h2>
      <div>
        <h4>Thumbs Up!</h4>
        <i className="far fa-thumbs-up fa-7x"></i>
        <p>Your volunteer was helpful and polite and you would love to have them as your volunteer again.</p>
      </div>
      <div>
        <h4>Thumbs Down!</h4>
        <i className="far fa-thumbs-down fa-7x"></i>
        <p>Your volunteer was not helpful and you wish to not have them as your volunteer again.</p>
      </div>
    </div>
  )
}

export default Rating