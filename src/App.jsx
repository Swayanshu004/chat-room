import { useEffect, useMemo, useState } from 'react'
import { io } from "socket.io-client"
import { TextField , Button } from "@mui/material"

function App() {
  const socket = useMemo(()=>io("http://localhost:3000"),[]);
  const [message , setMessage] = useState("");
  const [room , setRoom] = useState("");
  const [socketId , setSocketId] = useState("");
  const [messages , setMessages] = useState([]);

  useEffect(()=>{
    socket.on("connect",()=>{
      setSocketId(socket.id)
      console.log("React Connected");
    })
    socket.on("receive-message",(data)=>{
      setMessages(()=>[...messages,data])
      console.log("New Message : ",data);
    })
  },[])

  const handleSendBtn = (e)=>{
    e.preventDefault();
    socket.emit("message", {message, room});
    setMessage("");
    setRoom("");
  }

  return (
    <>
    <h3 className='px-10 py-4 bg-[#606c38] text-white font-semibold'>{socketId}</h3>
    <div>
      {
        messages.map((m, i)=> (
          <div 
          style={{width: "200px",padding: "10px 15px",margin: "5px 30px", backgroundColor: "#606c38", color: "#ffffff", text: "30px", borderRadius: "20px"}}>
            {m}
          </div>
        ))
      }
    </div>
    <div style={{width: "100vw", height: "100vh"}}>
      <form 
      onSubmit={handleSendBtn}
      style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", position: "absolute",bottom: "30px",width: "100vw"}}>
        <TextField
          required
          label="message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          style={{height: "50px", width: "200px"}}
        />
        <TextField
          required
          label="room"
          value={room}
          onChange={(e)=>setRoom(e.target.value)}
          style={{height: "50px", width: "200px"}}
        />
        <Button 
        type='submit' 
        variant="text"
        style={{height: "50px",width: "100px", backgroundColor: "#606c38", color: "white"}}>SEND</Button>
      </form>
    </div>

    </>
  )
}

export default App
