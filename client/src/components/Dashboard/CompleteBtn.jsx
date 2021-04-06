// Libraries + dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const CompleteBtn = ({ ticket, partnerID }) => {
  console.log(ticket);
  return (
    <Link>
      <button>Mark As Complete</button>
    </Link>
  );
};

export default CompleteBtn;