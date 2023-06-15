import { images } from "../../../asset";
import "./Message.scss";
import dayjs from "dayjs";
import { Box, Stack } from "@mui/material";

function Message({ messages, scrollRef }) {
  const currentUser = JSON.parse(localStorage.getItem("access"));

  return (
    <Box p={3}>
      <Stack spacing={3}>
        {messages?.map((m) => {
          return (
            <div
              ref={scrollRef}
              key={m?.id}
              className={`Message__container ${
                m?.sender?.id === currentUser?.user_id && "Message__reverse"
              }`}
            >
              <img src={images.James} alt="" />
              <div className="message__details">
                <p className="message p-text">{m?.message}</p>
                <p className="p-text time">
                  {dayjs(m?.created_at).format("hh:mma")}
                </p>
              </div>
            </div>
          );
        })}
      </Stack>
    </Box>
  );
}

export default Message;
