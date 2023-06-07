import { Box } from "@mui/material";
import React from "react";
import { images } from "../../asset";
const ChatFooter = ({ setUserInput, sendMessage, userInput }) => {
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
      }}
    >
      <div className="send__message box-shadow">
        <input value={userInput}  onChange={(e) => setUserInput(e.target.value)} type="text" />
        <button onClick={sendMessage} className="btn-send p-text flex">
          send <img src={images.angleRight} alt="" />
        </button>
      </div>
    </Box>
  );
};

export default ChatFooter;
