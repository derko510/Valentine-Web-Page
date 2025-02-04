import React, { useState } from 'react';

const Valentine = () => {
  // State to control the modal's visibility
  const [modalOpen, setModalOpen] = useState(false);
  // State to control the dynamic style for the "No" button
  // Initially, the "No" button is placed next to the "Yes" button.
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
  });

  // Function to open the modal when "Yes" is clicked
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to randomly reposition the "No" button
  const moveNoButton = () => {
    // Calculate random positions (in percentages between 10% and 90%)
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    // Update the style so the button moves instantly (no animation)
    setNoButtonStyle({
      position: 'absolute',
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      transform: 'translate(-50%, -50%)',
    });
  };

  // Global styles for this page (defined as a JS object)
  const styles = {
    container: {
      position: 'relative',
      height: '100vh', // full viewport height
      width: '100%',
      textAlign: 'center',
      overflow: 'hidden',
      backgroundColor: '#fff0f5',
      fontFamily: 'CustomFont, sans-serif',
    },
    gif: {
      width: '300px', // Adjust size as needed
      marginTop: '20px',
    },
    heading: {
      marginTop: '20px', // spacing between gif and heading
      fontSize: '2.5em',
      color: '#e60073',
      marginBottom: '40px',
    },
    buttonContainer: {
      position: 'relative',
      height: '200px',
      marginTop: '20px',
      fontFamily: 'CustomFont, sans-serif',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#ff99cc',
      color: '#fff',
      fontFamily: 'CustomFont, sans-serif',
    },
    yesButton: {
      position: 'absolute',
      left: '40%', // Yes button at 40% of the container's width
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'CustomFont, sans-serif',
    },
    noButton: {
      // The initial style for the No button will be merged with dynamic noButtonStyle.
      position: 'absolute',
      left: '60%', // No button at 60% of the container's width
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'CustomFont, sans-serif',
    },
    modalBackdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent backdrop
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      textAlign: 'center',
      fontFamily: 'CustomFont, sans-serif',
    },
    modalButton: {
      marginTop: '20px',
      padding: '8px 16px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#ff99cc',
      color: '#fff',
      fontFamily: 'CustomFont, sans-serif',
    },
  };

  return (
    <div style={styles.container}>
      {/* GIF image above the heading */}
      <img
        src="https://media1.giphy.com/media/ue2Mb3oHDmMmc/200w.gif?cid=6c09b952zxo03ax1qsmh5ynf3bjkb5jxk306h31iokmhhm1s&ep=v1_gifs_search&rid=200w.gif&ct=g" 
        alt="Valentine GIF"
        style={styles.gif}
      />
      {/* Centered heading */}
      <h1 style={styles.heading}>Will you be my valentine?</h1>
      
      {/* Container for the buttons */}
      <div style={styles.buttonContainer}>
        {/* "Yes" button */}
        <button onClick={openModal} style={{ ...styles.button, ...styles.yesButton }}>
          Yes
        </button>
        {/* "No" button */}
        <button onClick={moveNoButton} style={{ ...styles.button, ...styles.noButton, ...noButtonStyle }}>
          No
        </button>
      </div>

      {/* Modal: rendered only when modalOpen is true */}
      {modalOpen && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalContent}>
            <h2>Look Behind you</h2>
            <button onClick={closeModal} style={styles.modalButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Valentine;
