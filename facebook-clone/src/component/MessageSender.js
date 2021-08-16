import "../styles/MessageSender.css"
import {Avatar} from "@material-ui/core"
import users from '../database/user'
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InserEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import {useState} from "react"
function MessageSender(){
  const [input,setInput]=useState("")
  const [imageUrl,setImageUrl]=useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    //some cleaver database logi hear

    setImageUrl("")
    setInput("")
  }
  return(
    <div className="messageSender">
      <div className='messageSender__top'>
        <Avatar src={users[0].image} />
        <form>
          <input
           value={input}
           onChange={(e)=>setInput(e.target.value)}
            placeholder="what's on your mind?"
             className="messageSender__input"
             />
          <input
          value={imageUrl}
          onChange={(e)=>setImageUrl(e.target.value)}
          placeholder="image URL (Optional)" />
          <button onClick={handleSubmit} type="submit">
          Hidden handle
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
            <VideocamIcon style={{color:"red"}} />
            <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
            <PhotoLibraryIcon style={{color:"green"}} />
            <h3>Photo/video</h3>
        </div>

        <div className="messageSender__option">
            <InserEmoticonIcon style={{color:"orange"}} />
            <h3>Feeling/Activity</h3>
        </div>

      </div>
    </div>
  )
}

export default MessageSender
