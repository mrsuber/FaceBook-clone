import '../styles/Feed.css'
import StoryReels from './StoryReels'
import MessageSender from './MessageSender'
import Post from './Post'
import profilePic from '../images/users/me.webp'
import image from '../images/storyfeed/background1.jpg'
import db from "../config/firebase"
import {useState,useEffect} from 'react'


function Feed(){
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
    })
  },[])

  return(
    <div className="feed">
        <StoryReels />
        <MessageSender />


        {posts.map((post)=>(

          <Post

          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          />
        ))}





    </div>
  )
}
export default Feed
