import '../styles/StoryReels.css'
import Story from './Story'
import users from '../database/user'


function StoryReels(){
  return(
    <div className="storyReel">
      <Story
        image={users[0].story_image}
        profileSrc={users[0].image}
        title={users[0].name}

      />

      <Story
        image={users[0].story_image}
        profileSrc={users[0].image}
        title={users[0].name}

      />

      <Story
        image={users[0].story_image}
        profileSrc={users[0].image}
        title={users[0].name}

      />
    </div>
  )
}

export default StoryReels
