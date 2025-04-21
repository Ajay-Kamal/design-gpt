import React, { useRef, useState, useEffect } from 'react';

const ChatBox = () => {
  const [currentFiles, setCurrentFiles] = useState([]);
  const [errorVisible, setErrorVisible] = useState(false);
  const [text, setText] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const imagePreviewsRef = useRef(null);

  const handleFiles = (files) => {
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        if (file.size > 2 * 1024 * 1024) {
          setErrorVisible(true);
        } else {
          setCurrentFiles((prev) => [...prev, file]);
        }
      } else {
        alert(`${file.name} is not an image file. Please upload only images.`);
      }
    });
  };

  const removeFile = (fileToRemove) => {
    setCurrentFiles((prev) => prev.filter((file) => file !== fileToRemove));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    handleFiles(event.dataTransfer.files);
  };

  const handleAttachmentClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.addEventListener('change', (e) => {
      handleFiles(e.target.files);
    });

    input.click();
  };

  const handleSend = () => {
    if (currentFiles.length > 0 || text.trim() !== '') {
      console.log('Text:', text);
      console.log('Image Files:', currentFiles);

      alert('Message sent!');
      setText('');
      setCurrentFiles([]);
    } else {
      alert('Please type a message or upload at least one image.');
    }
  };

  useEffect(() => {
    if (errorVisible) {
      const timer = setTimeout(() => {
        setErrorVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorVisible]);

  const styles = {
    container: {
      fontFamily: 'Poppins, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f9',
    },
    chatContainer: {
      width: '1002px',
      minHeight: '148px',
      maxHeight: '300px',
      background: '#fff',
      borderRadius: '24px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    inputArea: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      background: '#ffffff',
      overflowY: 'auto',
    },
    textarea: {
      minHeight: '40px',
      maxHeight: '120px',
      padding: '15px',
      paddingRight: '160px',
      border: 'none',
      outline: 'none',
      borderRadius: '5px',
      background: '#ffffff',
      fontSize: '16px',
      resize: 'none',
      overflowY: 'auto',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      gap: '10px',
    },
    attachButton: {
      padding: '10px 15px',
      background: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    sendButton: {
      width: '40px',
      height: '40px',
      background: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    previews: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '10px',
    },
    previewItem: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    previewImg: {
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    removePreview: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      background: 'rgba(255, 0, 0, 0.8)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      fontSize: '12px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorMessage: {
      display: errorVisible ? 'flex' : 'none',
      alignItems: 'center',
      background: '#ffebee',
      borderRadius: '8px',
      padding: '8px 12px',
      marginBottom: '10px',
      fontSize: '12px',
      position: 'relative',
    },
    errorIcon: {
      background: '#f44336',
      color: 'white',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      marginRight: '8px',
    },
    closeError: {
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      fontSize: '14px',
      cursor: 'pointer',
      color: '#f44336',
    },
    dragDrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.95)',
      display: dragActive ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      border: '2px dashed #ccc',
      zIndex: 1000,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <div
          style={styles.inputArea}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => {
            if (e.dataTransfer.types.includes('Files')) setDragActive(true);
          }}
          onDragLeave={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setDragActive(false);
          }}
          onDrop={handleDrop}
        >
          {/* Image Previews */}
          <div style={styles.previews} ref={imagePreviewsRef}>
            {currentFiles.map((file, index) => {
              const objectURL = URL.createObjectURL(file);
              return (
                <div key={index} style={styles.previewItem}>
                  <img src={objectURL} alt="preview" style={styles.previewImg} />
                  <button
                    style={styles.removePreview}
                    onClick={() => removeFile(file)}
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>

          {/* Error Message */}
          <div style={styles.errorMessage}>
            <div style={styles.errorIcon}>!</div>
            <div style={{ color: '#f44336', fontSize: '12px' }}>
              File cannot be uploaded. The uploaded file likely exceeded the maximum file size (2 MB).
            </div>
            <button
              style={styles.closeError}
              onClick={() => setErrorVisible(false)}
            >
              &times;
            </button>
          </div>

          {/* Text Input */}
          <textarea
            style={styles.textarea}
            placeholder="Enter your prompts here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* Buttons */}
          <div style={styles.buttonContainer}>
            <button
              style={styles.attachButton}
              onClick={handleAttachmentClick}
            >
              Attachment
            </button>
            <button style={styles.sendButton} onClick={handleSend}>
              →
            </button>
          </div>
        </div>
      </div>

      {/* Drag-and-Drop Overlay */}
      <div style={styles.dragDrop}>
        <p style={{ fontSize: '24px', color: '#666', fontWeight: 'bold' }}>
          Drop your files here
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
