import { Avatar, Stack } from "@mui/material";
import * as dayjs from "dayjs";
import ClipLoader from "react-spinners/ClipLoader";

const Chats = ({ userChats, handleSelect }) => {

  return (
    <Stack height="100vh" sx={{ padding: "6rem 0 1rem 1rem" }}>
      <div className="chat__left box-shadow">
        <h3 className="p-text title">Message</h3>
        <div className="search__container">
          <div className="search__box box-shadow relative h-[40px]">
            <input type="text" placeholder="Search" className="input" />
          </div>
        </div>
        <div className="chats">
        <Stack justifyContent="center" >
          {userChats ? (
            userChats?.map((chat) => {
              return (
                <div
                  onClick={() => handleSelect(chat)}
                  className="chat hover:bg-slate-200"
                  key={chat.id}
                  style={{ cursor: "pointer" }}
                >
                  <div className="chat__info">
                    <div className="info__image-box">
                      {/* <img src={images.James} alt="" /> */}
                      <Avatar />
                      <span></span>
                    </div>
                    <div className="info__details">
                      <p className="p-text name">Johnson</p>
                      <p className="p-text message">
                        {" "}
                        {chat.last_message?.message.length > 15
                          ? chat.last_message?.message.slice(0, 15) + "..."
                          : chat.last_message?.message}
                      </p>
                    </div>
                  </div>
                  <p className="p-text time">
                    {dayjs(chat.last_message?.created_at).format("hh:mma")}
                  </p>
                </div>
              );
            })
            
          ) : (
            <Stack paddingTop={3} alignItems={"center"} justifyContent={"center"}>
              <ClipLoader
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Stack>
          )}
          </Stack>
        </div>
      </div>
    </Stack>
  );
};

export default Chats;
