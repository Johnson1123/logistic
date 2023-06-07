import React, { useEffect, useRef, useState } from "react";
import { charts } from "../../../content/chart";
import "./Chat.scss";
import { recents } from "../../../content/recent";
import axios from "axios";


function Chat() {

  

//   const [userChats, setUserChats] = useState();
//   const socket = useRef(null)
//   const {user} = JSON.parse(localStorage.getItem("token")).data;


//   useEffect(()=> {
//     socket.current = io("http://localhost:5000")
//  }, [])


//  useEffect(()=> {
//   socket.current?.emit("addUser", user.user_id)
//   socket.current?.on("getUsers", users => {
//    console.log(users)
//   })
// }, [user.user_id])



//   //get user chats
//   useEffect(() => {
//     const getUserChats = async () => {
//       const access = JSON.parse(localStorage.getItem("token"));
      
//       const config = {
//         headers: {
//           Authorization: `Bearer ${access.data.access}`,
//         },
//       };

//       try {
//         const { data } = await axios.get(
//           `https://techvonix.onrender.com/api/v1/chat/chats`,
//           config
//         );

//         console.log(data)
//         setUserChats(data.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };

//     getUserChats();
//   }, []);


  return (
    <div className="chart__con box-shadow">
      <p className="title p-text">Chart</p>
      {charts.map((chart, index) => {
        return (
          <div className="chart__box flex" key={index}>
            <div className="box p-text col-1">
              <img src={chart.image} alt={chart.name} />{" "}
              <div className="dot"></div>
            </div>
            <div className="box p-text col-2">
              <p
                className={
                  chart.name.length > 15
                    ? "small-title name trucate"
                    : "small-title name"
                }
              >
                {chart.name} 
              </p>
              <p className="message">{chart.lMessage}</p>
            </div>
            <div className="box p-text col-3">{chart.time}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
