import React, {useState, useMemo} from 'react'
import { io } from "socket.io-client"
import { TextField , Button } from "@mui/material"

function Navbar() {
  const socket = useMemo(()=>io("http://localhost:3000"),[]);
  const handlejoinRoom = (e)=>{
    e.preventDefault();
    socket.emit("join-room", roomName);
    setRoomName("");
  }
  const [roomName , setRoomName] = useState("");
  return (
    <div className='px-10 py-5 flex items-center justify-between'>
        <h1 className='text-[#606c38] font-bold text-3xl'>chat-room</h1>
        <form 
        className='flex items-end justify-center gap-10'
        onSubmit={handlejoinRoom}>
          <TextField
            required
            label="Room Name"
            value={roomName}
            onChange={(e)=>setRoomName(e.target.value)}
            style={{height: "50px", width: "200px"}}
          />
          <Button 
          type='submit' 
          variant="text"
          style={{height: "50px",width: "100px", backgroundColor: "#606c38", color: "white"}}>JOIN</Button>
        </form>
    </div>
  )
}

export default Navbar