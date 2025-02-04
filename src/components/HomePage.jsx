import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const updateCountdown = () => {
      // (If you prefer a future date, adjust the targetDate accordingly.)
      const targetDate = new Date("November 21, 2021 00:00:00").getTime();
      const now = new Date().getTime();
      const diff = targetDate - now;

      const days = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)));
      const hours = Math.abs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = Math.abs(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = Math.abs(Math.floor((diff % (1000 * 60)) / 1000));

      setTime({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    body: {
      backgroundColor: '#ffe6e6',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      maxWidth: '800px',
      width: '100%',
      background: '#fff',
      border: '2px solid #ffcccc',
      borderRadius: '10px',
      padding: '20px',
    },
    h1: {
      color: '#e60073',
      fontSize: '3em',
      marginBottom: '10px',
    },
    countdownBox: {
      backgroundColor: '#ff99cc',
      color: '#fff',
      padding: '20px 30px',
      borderRadius: '8px',
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
    countdownTitle: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    timeSegments: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
    },
    timeSegment: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '80px',
    },
    timeValue: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    timeLabel: {
      fontSize: '0.9em',
    },
    navButtons: {
      marginTop: '20px',
    },
    button: {
      margin: '10px',
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
      <div style={styles.container}>
        <h1 style={styles.h1}>HI KIMMY!</h1>
        {/* Countdown box with a title above the time segments */}
        <div style={styles.countdownBox}>
          <div style={styles.countdownTitle}>Time since we met</div>
          <div style={styles.timeSegments}>
            <div style={styles.timeSegment}>
              <div style={styles.timeValue}>{time.days}</div>
              <div style={styles.timeLabel}>Days</div>
            </div>
            <div style={styles.timeSegment}>
              <div style={styles.timeValue}>{time.hours}</div>
              <div style={styles.timeLabel}>Hours</div>
            </div>
            <div style={styles.timeSegment}>
              <div style={styles.timeValue}>{time.minutes}</div>
              <div style={styles.timeLabel}>Minutes</div>
            </div>
            <div style={styles.timeSegment}>
              <div style={styles.timeValue}>{time.seconds}</div>
              <div style={styles.timeLabel}>Seconds</div>
            </div>
          </div>
        </div>
        <div style={styles.navButtons}>
          <button style={styles.button} onClick={() => navigate('/letter')}>
            Letter
          </button>
          <button style={styles.button} onClick={() => navigate('/collage')}>
            Collage
          </button>
          <button style={styles.button} onClick={() => navigate('/valentine')}>
            Valentine
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
