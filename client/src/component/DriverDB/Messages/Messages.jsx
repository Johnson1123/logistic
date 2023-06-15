import React, { useEffect, useRef, useState } from "react";

// icons
import { w3cwebsocket as W3CWebSocket } from "websocket";

// file import
import "./Messages.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { changeUser, chatId, userSelected } from "../../../features/Chat/Chat";
import Chats from "../../Conversation/Chats";
import ChatScreen from "../../Conversation/ChatScreen";

function Messages() {
  const dispatch = useDispatch();
  const [userChats, setUserChats] = useState();
  const [userInput, setUserInput] = useState();
  const [messages, setMessages] = useState([]);
  const [loadingMsgs, setLoadingMsgs] = useState(false);
  const selectecUser = useSelector(userSelected);
  const currentUser = JSON.parse(localStorage.getItem("access"));
  const msgId = useSelector(chatId);

  const scrollRef = useRef();

  //get user chats
  useEffect(() => {
    const getUserChats = async () => {
      const access = JSON.parse(localStorage.getItem("access"));

      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };

      try {
        const { data } = await axios.get(
          `https://techvonix.onrender.com/api/v1/chat/chats`,
          config
        );

        console.log(data);
        setUserChats(data.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getUserChats();
  }, []);

  // get user messages

  useEffect(() => {
    const getMsg = async () => {
      setLoadingMsgs(true);
      const access = JSON.parse(localStorage.getItem("access"));
      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };

      try {
        const { data } = await axios.get(
          `https://techvonix.onrender.com/api/v1/chat/chat/${msgId}/messages`,
          config
        );
        setUserInput("");
        setMessages(data.data);
        setLoadingMsgs(false);
      } catch (error) {
        console.log(error.response.data);
        setLoadingMsgs(false);
      }
    };

    msgId !== "" && getMsg();
  }, [msgId]);

  // select user to chat with func
  const handleSelect = async (selectedChat) => {
    const selectedUser = selectedChat.users.find(
      (user) => user.id !== currentUser.user_id
    );

    dispatch(
      changeUser({ selectedUser: selectedUser, chatId: selectedChat.id })
    );
  };

  // send message func
  const sendMessage = async () => {
    const body = {
      chat_id: msgId,
      message: userInput,
    };

    const access = JSON.parse(localStorage.getItem("access"));
    const config = {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    };

    try {
      setUserInput("");
      const { data } = await axios.post(
        `https://techvonix.onrender.com/api/v1/chat/send-message`,
        body,
        config
      );

      console.log(data.data);
      setMessages([...messages, data.data]);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="Messages__container">
      <div className="Messages__wrapper">
        <Box>
          <Chats userChats={userChats} handleSelect={handleSelect} />
        </Box>

        <Box sx={{ width: "100%" }}>
          {msgId !== "" ? (
            <ChatScreen
              sendMessage={sendMessage}
              scrollRef={scrollRef}
              messages={messages}
              loadingMsgs={loadingMsgs}
              userInput={userInput}
              setUserInput={setUserInput}
            />
          ) : (
            <Stack
              height="100vh"
              justifyContent="center"
              alignItems="center"
              sx={{ padding: "6rem 0 1rem 1rem" }}
            >
              <Typography variant="h2" sx={{ color: "rgb(224, 220, 220)" }}>
                Start a Conversation
              </Typography>
            </Stack>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Messages;
