import { Box, Stack } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Message from "./Message/Message";
import ChatFooter from "./ChatFooter";
import ClipLoader from "react-spinners/ClipLoader";

const ChatScreen = ({
  loadingMsgs,
  userInput,
  sendMessage,
  scrollRef,
  messages,
  setUserInput,
}) => {
  return (
    <Stack height="100vh" sx={{ padding: "6rem 0 1rem 1rem" }}>
      <div className="chat__right">
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
          <ChatHeader />

          <Box
            width="100%"
            sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
          >
            {!loadingMsgs ? (
              
              <Message messages={messages} scrollRef={scrollRef} />
            ) : (
              <Box justifyContent="center" alignItems="center" sx={{display: "flex", width: "100%", height: "100%" }}>
              <ClipLoader
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              </Box>
            )}
          </Box>

          <Box sx={{ width: "100%" }}>
            <ChatFooter
              sendMessage={sendMessage}
              userInput={userInput}
              setUserInput={setUserInput}
            />
          </Box>
        </Stack>
      </div>
    </Stack>
  );
};

export default ChatScreen;
