import { Avatar, Box, Stack } from '@mui/material'
import { BsThreeDotsVertical } from 'react-icons/bs'

const ChatHeader = () => {
  return (
    <Box
    p={2}
    sx={{
      width: "100%",
    }}
  >
    <div className="messages__nav box-shadow">
      <Stack
        alignItems={"center"}
        direction="row"
        justifyContent={"space-between"}
        sx={{ height: "100%", width: "100%" }}
      >
        <Stack>
          <div className="chat__info">
            <div className="info__image-box">
            <Avatar />
              {/* <img src={images.James} alt="" /> */}
              <span></span>
            </div>
            <div className="info__details">
              <p className="p-text name">
                {" "}
               Johnson 
              </p>
              <p className="p-text message">online</p>
            </div>
          </div>
        </Stack>
        <Stack>
          <BsThreeDotsVertical />
        </Stack>
      </Stack>
    </div>
  </Box>
  )
}

export default ChatHeader