import React from 'react';
import { useNavigate } from 'react-router-dom';

function Collage() {
  const navigate = useNavigate();

  // Array of 9 image URLs (replace these with your actual images if desired)
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJApGdvWpLsVgsgeFdXuLZTu6JdE9n6VRwdg&s",
  ];

  const styles = {
    body: {
      backgroundColor: '#ffe6e6',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      textAlign: 'center',
      color: '#0000000',
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
