import '../styles/Feed.css'
import StoryReels from './StoryReels'
import MessageSender from './MessageSender'
import Post from './Post'
import profilePic from '../images/users/me.webp'
import image from '../images/storyfeed/background1.jpg'


function Feed(){
  return(
    <div className="feed">
        <StoryReels />
        <MessageSender />
        <Post

        profilePic={profilePic}
        message="wow this works"
        timestamp="this is a time stap"
        username="mrsuber"
        image={image}
        />
        <Post

        profilePic={profilePic}
        message="wow this works"
        timestamp="this is a time stap"
        username="mrsuber"

        />


    </div>
  )
}
export default Feed
