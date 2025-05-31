import { p } from "framer-motion/client";
import { useChat } from "../Contexts/ChatContext";
import "./chatsection.css";
import ReactMarkdown from "react-markdown";

const ChatSection = () => {
  const { chatHistory, setChatHistory } = useChat();
  console.log("Chat History:", chatHistory);
  return (
    <div className="chat-history">
      {chatHistory.map((item, idx) => (
        <div key={idx} className="chat-message">
          <div className="user-message">
            {item.input.image && (
              <img
                src={URL.createObjectURL(item.input.image)}
                alt="User upload"
                className="chat-image"
              />
            )}
            <span>{item.input.text}</span>
          </div>
          <div className="ai-message">
            {item.loading ? (
              <span className="loading-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            ) : (
                <ReactMarkdown>{item.output}</ReactMarkdown>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSection;
