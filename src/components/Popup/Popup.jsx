import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [visibleCircles, setVisibleCircles] = useState([]);
  const [hidingCircles, setHidingCircles] = useState([]);
  const [starAnimationComplete, setStarAnimationComplete] = useState(false);
  const [circleAnimationComplete, setCircleAnimationComplete] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const words = [" desired ", " design ", " desired ", " design "];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCreativityTextComplete, setIsCreativityTextComplete] =
    useState(false);

  useEffect(() => {
    let timeoutId;
    const speed = 200;
    const delay = 1000;

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }

      let typingSpeed = isDeleting ? speed / 2 : speed;

      if (!isDeleting && currentText === currentWord) {
        typingSpeed = delay;
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      timeoutId = setTimeout(typeEffect, typingSpeed);
    };

    timeoutId = setTimeout(typeEffect, speed);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, wordIndex]);

  useEffect(() => {
    const starAnimationTimeout = setTimeout(() => {
      setStarAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(starAnimationTimeout); // Cleanup timeout
  }, []);

  useEffect(() => {
    if (starAnimationComplete) {
      const totalCircles = 6;
      let currentIndex = 0;

      const animateCircles = () => {
        setVisibleCircles([currentIndex]);
        setHidingCircles([]); // Only keep the current visible

        currentIndex++;
        if (currentIndex < totalCircles) {
          setTimeout(animateCircles, 200); // 0.1s for each step
        } else {
          // After the last circle, hide it and complete animation
          setTimeout(() => {
            setVisibleCircles([]);
            setCircleAnimationComplete(true);
          }, 100);
        }
      };
        animateCircles();
    }
  }, [starAnimationComplete]);

  useEffect(() => {
    if (circleAnimationComplete) {
      // Animate creativity images sequentially after circle animation completes
      const animateCreativityImages = () => {
        const totalImages = 6; // Total number of creativity images
        let currentIndex = 0;

        const interval = setInterval(() => {
          setVisibleImages((prev) => [...prev, currentIndex]); // Add the current image to the visible list
          currentIndex++;

          if (currentIndex >= totalImages) {
            clearInterval(interval); // Stop the animation when all images are visible
            setIsCreativityTextComplete(true);
          }
        }, 300); // 300ms delay between each image
      };

      animateCreativityImages();
    }
  }, [circleAnimationComplete]); // Trigger creativity animation only after circle animation completes

  // Functions to handle file selection and validation
  const handleFile = (file) => {
    if (file.type.startsWith("image/")) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage(
          "File cannot be uploaded. The uploaded file likely exceeded the maximum file size (10 MB)"
        );
        setCurrentFile(null); // Clear the current file if there's an error
      } else {
        setCurrentFile(file); // Set the single file
        setErrorMessage(""); // Clear any previous error
      }
    } else {
      alert(`"${file.name}" is not an image file. Please upload only images.`);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0]; // Get the first file
    if (file) {
      handleFile(file);
    }
  };

  const handleAttachmentClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0]; // Get the first file
      if (file) {
        handleFile(file);
      }
    });

    fileInput.click();
  };

  const handleRemoveFile = () => {
    setCurrentFile(null); // Remove the file
    setErrorMessage(""); // Clear any error message
  };

  const handleSend = () => {
    const textInput = document.querySelector(".popup-chat-input").value.trim();

    if (currentFile || textInput !== "") {
      console.log("Text:", textInput);
      console.log("Image File:", currentFile);

      // Reset input and file
      document.querySelector(".popup-chat-input").value = "";
      setCurrentFile(null);
      setErrorMessage("");
      alert("Message sent!");
    } else {
      alert("Please type a message or upload an image.");
    }
  };

  return (
    <div
      className={`popup ${dragActive ? "drag-active" : ""}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="star-animation">
        <img src="./popup-pulse.svg" alt="" className="popup-pulse" />
        <div className="sa-star-comp">
          <div
            className={`sa-circle-container ${
              circleAnimationComplete ? "fade-out" : ""
            }`}
          >
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <img
                key={index}
                className={`sa-circle${num} circles`}
                src={`./popup-circle${num}.svg`}
                alt={`circle${num}`}
                style={{
                  opacity: visibleCircles.includes(index) ? 1 : 0,
                  transition: "opacity 0.2s",
                }}
              />
            ))}
          </div>
          <div className="sa-star-sec">
            <img src="./popup-whitestar.svg" alt="" className="sa-back-star" />
            <img src="./popup-star.svg" alt="" className="sa-front-star" />
          </div>
          <div className="sa-star-line"></div>
        </div>
        <div className="sa-creativity-text">
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <img
              key={index}
              className={`creativity${num}`}
              src={`./popup-creativity${num}.svg`}
              alt={`creativity${num}`}
              style={{ opacity: visibleImages.includes(index) ? 1 : 0 }}
            />
          ))}
        </div>
        <div
          className={`sa-animated-txt ${
            isCreativityTextComplete ? "fade-in" : ""
          }`}
        >
          <p>
            Our
            <img
              className="sa-magical"
              src="./popup-magical.svg"
              alt="magical-prompts"
            />
            solutions are tailormade to boost your productivity,
          </p>
          <p>
            & highly recommended to achieve your
            <span className="popup-text-animation">{currentText}</span>
            <img
              className={`sa-cursor ${isDeleting ? "blink" : ""}`}
              src="./popup-cursor.svg"
              alt="cursor"
            />
            results
          </p>
        </div>
      </div>

      <div className="popup-chatbox">
        <div className="popup-chat-box1">
          {/* Conditional Rendering for Image Preview or Error Message */}
          {currentFile && !errorMessage && (
            <div className="image-preview">
              <img src={URL.createObjectURL(currentFile)} alt="Preview" />
              <button className="remove-preview-btn" onClick={handleRemoveFile}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.15661 3.99995L0.421707 6.73485C0.188804 6.96775 0.1888 7.34536 0.421699 7.57827C0.654603 7.81118 1.03222 7.81119 1.26513 7.57828L4.00005 4.84339L6.73494 7.57828C6.96785 7.81119 7.34547 7.81119 7.57838 7.57828C7.81129 7.34537 7.81129 6.96775 7.57838 6.73484L4.84349 3.99995L7.57831 1.26512C7.81122 1.03222 7.81121 0.654606 7.5783 0.421706C7.34539 0.188803 6.96777 0.188805 6.73487 0.421712L4.00005 3.15651L1.26521 0.421702C1.03231 0.188802 0.654703 0.188803 0.421802 0.421705C0.188899 0.654607 0.188899 1.03222 0.4218 1.26512L3.15661 3.99995Z"
                    fill="#191919"
                  />
                </svg>
              </button>
            </div>
          )}
          {errorMessage && !currentFile && (
            <div className="error-message">
              <div className="error-message-icon">
                <img
                  src="./popup-uploaderror.svg"
                  alt="!"
                  className="error-icon-img"
                />
                <button
                  className="error-message-close"
                  onClick={() => setErrorMessage("")}
                >
                  ×
                </button>
              </div>
              <div className="error-message-text">{errorMessage}</div>
            </div>
          )}

          {/* Chat Input Section */}
          <div className="popup-cb-input-sec">
            <img
              src="./popup-chat-box-icon.svg"
              alt=""
              className="chat-box-icon"
            />
            <textarea
              className="popup-chat-input"
              placeholder="Enter your prompt here"
            />
          </div>
        </div>

        {/* Attachment and Send Buttons */}
        <div className="popup-chat-box2">
          <button className="popup-attachment" onClick={handleAttachmentClick}>
            <img
              src="./popup-paperclip-vertical.svg"
              alt="Default Icon"
              className="popup-default-img"
            />
            <img
              src="./popup-paperclip-color.svg"
              alt="Hover Icon"
              className="popup-hover-img"
            />
            <span>Attachment</span>
            <img
              src="./popup-uploadimage.svg"
              alt="uploadimage"
              className="popup-uploadimage"
            />
          </button>
          <div className="popup-attachment-line"></div>
          <button className="popup-send-btn" onClick={handleSend}>
            <img
              className="popup-sendicon"
              src="./popup-sendicon.svg"
              alt="Send"
            />
          </button>
        </div>
      </div>

      {/* Drag-and-Drop Overlay */}
      {dragActive && (
        <div className="drag-and-drop">
          <p>Drop your file here</p>
        </div>
      )}
    </div>
  );
};

export default Popup;
