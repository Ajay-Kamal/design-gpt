import { useState } from "react";
import "./Popup.css";
import StarAnimation from "../StarAnimation";
import { useChat } from "../Contexts/ChatContext";
import ChatSection from "../ChatSection/ChatSection";

const Popup = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [starSlideUp, setStarSlideUp] = useState(false);
  const [popupBgWhite, setPopupBgWhite] = useState(false);
  const [promptText, setPromptText] = useState("");
  const { chatHistory, setChatHistory } = useChat();

  const handleStarAnimationComplete = () => {
    setTimeout(() => {
      setStarSlideUp(true);
      setTimeout(() => {
        setPopupBgWhite(true);
      }, 1200);
    }, 1000);
  };

  const handleFile = (file) => {
    if (file.type.startsWith("image/")) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage(
          "File cannot be uploaded. The uploaded file likely exceeded the maximum file size (10 MB)"
        );
        setCurrentFile(null);
      } else {
        setCurrentFile(file);
        setErrorMessage("");
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

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleAttachmentClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        handleFile(file);
      }
    });

    fileInput.click();
  };

  const handleRemoveFile = () => {
    setCurrentFile(null);
    setErrorMessage("");
  };

  async function chatWithAI(userMessage) {
    const textBackendKey = import.meta.env.VITE_TEXT_BACKEND_KEY;
    const response = await fetch(textBackendKey, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
        messages: [{ role: "user", content: userMessage }],
        temperature: 0.7,
        top_p: 1.0,
        max_tokens: 4096,
        system_prompt:
          "Your name is Loco AI and you are a helpful AI assistant especially for Product Designers.",
      }),
    });

    // If your API returns a single JSON object:
    const data = await response.json();
    return data.response; // Adjust this property based on your API's response
  }

  const handleSend = () => {
    const textInput = promptText.trim();
    if (!textInput && !currentFile) {
      alert("Please type a message or upload an image.");
      return;
    }

    setChatHistory((prev) => [
      ...prev,
      {
        input: { text: textInput, image: currentFile },
        output: "",
        loading: true,
      },
    ]);
    setPromptText("");
    setCurrentFile(null);
    setErrorMessage("");

    chatWithAI(textInput)
      .then((aiResponse) => {
        setChatHistory((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            output: aiResponse,
            loading: false,
          };
          return updated;
        });
      })
      .catch((error) => {
        setErrorMessage("An error occurred while sending the message.");
        setChatHistory((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            output: "Error: Could not get response.",
            loading: false,
          };
          return updated;
        });
      });
  };

  return (
    <div
      className={`popup${popupBgWhite ? " bg-white" : ""} ${
        dragActive ? " drag-active" : ""
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {starSlideUp && <ChatSection />}
      <StarAnimation
        onComplete={handleStarAnimationComplete}
        slideUp={starSlideUp}
      />

      <div
        className={`popup-chatbox${starSlideUp ? " center-after-star" : ""}`}
      >
        <div className="popup-chat-box1">
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
                    fillRule="evenodd"
                    clipRule="evenodd"
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
                  x
                </button>
              </div>
              <div className="error-message-text">{errorMessage}</div>
            </div>
          )}

          <div className="popup-cb-input-sec">
            <img
              src="./popup-chat-box-icon.svg"
              alt=""
              className="chat-box-icon"
            />
            <textarea
              className="popup-chat-input"
              placeholder="Enter your prompt here"
              onChange={(e) => setPromptText(e.target.value)}
              value={promptText}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
          </div>
        </div>

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
