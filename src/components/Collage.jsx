import React from 'react';
import { useNavigate } from 'react-router-dom';
function Collage() {
  const navigate = useNavigate();

  // Array of 24 different image URLs (replace these with your actual image URLs)
  const images = [
    "/assets/1.gif",
    "/assets/1.jpg",
    "/assets/2.gif",
    "/assets/2.jpg",
    "/assets/3.gif",
    "/assets/3.jpg",
    "/assets/4.gif",
    "/assets/4.jpg",
    "/assets/5.gif",
    "/assets/5.jpg",
    "/assets/6.gif",
    "/assets/6.jpg",
    "/assets/7.gif",
    "/assets/7.jpg",
    "/assets/8.gif",
    "/assets/8.jpg",
    "/assets/9.gif",
    "/assets/9.jpg",
    "/assets/10.jpg",
    "/assets/11.gif",
    "/assets/11.jpg",
    "/assets/12.gif",
    "/assets/13.jpg",
    "/assets/14.jpg",
  ];  

  const styles = {
    body: {
      backgroundColor: '#ffe6e6',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      textAlign: 'center',
    },
    collage: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)', // Creates 3 columns with auto width
      gap: '10px', // 10px gap in both x and y directions
      justifyContent: 'center', // Center grid horizontally
      alignItems: 'center',     // Center grid items vertically
      margin: '0 auto',         // Center the grid container itself
    },
    image: {
      width: '350px',
      height: 'auto',
      border: '3px solid #ff99cc',
      borderRadius: '10px',
    },
    homeButton: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1em',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#ff99cc',
      color: '#fff',
    },
  };

  return (
    <div style={styles.body}>
      <h1>Our Collage</h1>
      <div style={styles.collage}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Pic ${index + 1}`} style={styles.image} />
        ))}
      </div>
      <button style={styles.homeButton} onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  );
}

export default Collage;
