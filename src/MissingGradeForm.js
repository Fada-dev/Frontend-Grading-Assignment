import React, { useState } from 'react';
import Header from './Header';
import Footer from './PageFooter';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MissingGradeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission (e.g., API call or data processing)
    setIsSubmitted(true);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirmation = (confirmed) => {
    setShowLogoutConfirmation(false);
    if (confirmed) {
      // Redirect to the LoginPage
      navigate('/'); // Update the path based on your route configuration
    }
  };

  return (
    <div>
      <Header />
    <div className="form-container">
        
      {isSubmitted ? (
        <div className='return-message'>
          <p>Your missing grade report has been submitted. Thank you!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="missing-grade-form">
                  <h3>Missing Grade Form Page</h3>

          <label htmlFor="courseName" className="form-label">
            Course Name:
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label htmlFor="instructorName" className="form-label">
            Instructor Name:
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label htmlFor="expectedGrade" className="form-label">
            Expected Grade:
          </label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label htmlFor="explanation" className="form-label">
            Explanation:
          </label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleChange}
            className="form-input"
            required
          ></textarea>

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      )}
    </div>
        {/* Logout Icon */}
        <div className="logout-icon" onClick={handleLogoutClick}>
          <FaSignOutAlt size={30} />
        </div>

        {showLogoutConfirmation && (
          <div className="logout-confirmation-msg">
            <p>Are you sure you want to log out?</p>
            <button onClick={() => handleLogoutConfirmation(true)}>Yes</button>
            <button onClick={() => handleLogoutConfirmation(false)}>No</button>
          </div>
        )}
    <Footer />
    </div>
  );
};

export default MissingGradeForm;
