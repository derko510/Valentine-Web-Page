import React from 'react';
import { useNavigate } from 'react-router-dom';

function Letter() {
  const navigate = useNavigate();

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>My Dear Kimmy,</h1>
        <p style={styles.paragraph}>
          This is a sample letter text. I just want you to know that every 
          moment we spend together feels magical. I cherish our memories 
          and look forward to making many more.
        </p>
        <p style={styles.paragraph}>
          Love always,<br />
          [Your Name]
        </p>
        {/* Wrapping the button inside a div for centering */}
        <div style={styles.buttonContainer}>
          <button style={styles.homeButton} onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: '#ffe6e6',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '40px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    maxWidth: '700px',
    width: '100%',
    textAlign: 'left',
  },
  heading: {
    color: '#e60073',
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center', // Centers button horizontally
    marginTop: '20px', // Adds spacing above the button
  },
  homeButton: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff99cc',
    color: '#fff',
  },
};

export default Letter;
