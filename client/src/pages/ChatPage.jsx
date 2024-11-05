import axios from "axios";
import React, { useEffect } from "react";

const ChatPage = () => {
  const fetchChats = async () => {
    const data = await axios.get("/api/v1/chats");
    console.log("DATA", data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>ChatPage</div>;
};

export default ChatPage;
