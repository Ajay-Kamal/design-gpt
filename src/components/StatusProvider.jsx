import { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export const useStatus = () => useContext(StatusContext);

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState({
    text: "Welcome Home", // Primary status text
    subText: "", // Secondary status text
  });
  const [mesgCnt, setMesgCnt] = useState(0); // 🔹 Add message count state

  return (
    <StatusContext.Provider value={{ status, setStatus, mesgCnt, setMesgCnt }}>
    {children}
  </StatusContext.Provider>
  );
};
