import React, { useState, useEffect } from 'react';

function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e) => {
//       // Prevent the mini-infobar from appearing on mobile
//       e.preventDefault();
//       // Stash the event so it can be triggered later.
//       setDeferredPrompt(e);
//       // Show your custom install button
//       setShowModal(true);
//     };

//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

//     return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//   }, []);

useEffect(() => {
    // Check if the app is already installed on Android or Desktop
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    } else {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }

    // Clean up the event listener
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleBeforeInstallPrompt = (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    setDeferredPrompt(e);
    // Show the modal only if the app is not installed
    if (!isInstalled) {
     // setShowModal(true);
      if (window.matchMedia('(max-width: 768px)').matches) {
        setShowModal(true);
      }
      
    }
  };


  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Clear the deferred prompt
        setDeferredPrompt(null);
        setShowModal(true);
      });
    }
  };
  const handleCancelClick = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

//   return (
//     <button onClick={handleInstallClick}>
//       Install App
//     </button>
//   );

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
       {/* <button style={styles.closeButton} onClick={handleCancelClick}>
          &times;
        </button> */}
        <h3>Install App</h3>
        <p>Install this app on your device for a better experience.</p>
        <button style={styles.installButton} onClick={handleInstallClick}>
          Install
        </button>
        <button style={styles.installButton} onClick={handleCancelClick}>
          Cancel  &times;
        </button>
      </div>
    </div>
  );
}

const styles = {
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
    },
    installButton: {
      marginTop: '10px',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginLeft: '10px',
    },
  };

export default InstallPWA;
