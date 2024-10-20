import React from 'react';
import { Link } from 'react-router-dom';

import './ThankYouPage.css'

const ThankYouPage = () => {

  return (
    <div className="thank-you-page">
      <div className="thank-you-card">
        <img src="https://i.pinimg.com/236x/62/15/9f/62159f6914ebb27745dd974dd36032c9.jpg" className="hands-image" alt=""/>
      <h1 className="thank-you-message">Thank You for Viewing the Product!</h1>
      <Link to="/" className="back-btn-style">
      <button className="back-btn" type="button">Back</button>
      </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
