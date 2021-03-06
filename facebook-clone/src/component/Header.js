import '../styles/Header.css'
import logo from "../images/facebook_logo.png"
import pic from '../images/users/me.webp'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"
import {Avatar,IconButton} from "@material-ui/core"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from '@material-ui/icons/Add';
import {useStateValue} from "../Stateprovider"

function Header(){
  const [{user}, dispatch] = useStateValue();
  return(
    <div className="header">
        <div className="header__left">
            <img src={logo} alt=""/>
            <div className="header__input">

                <SearchIcon />
                <input type='text' placeholder="Search Facebook" />

            </div>
        </div>
        <div className="header__center">
          <div className="header__option header__option__acive">
              <HomeIcon fontSize="large" />

          </div>
          <div className="header__option">
              <FlagIcon fontSize="large" />

          </div>

          <div className="header__option">
              <SubscriptionsOutlinedIcon fontSize="large" />

          </div>

          <div className="header__option">
              <StorefrontOutlinedIcon fontSize="large" />

          </div>

          <div className="header__option">
              <SupervisedUserCircleIcon fontSize="large" />

          </div>
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>

              <IconButton>
                <AddIcon />
                </IconButton>


                <IconButton>
                  <ForumIcon />
                  </IconButton>

                  <IconButton>
                    <NotificationsActiveIcon />
                    </IconButton>

                    <IconButton>
                      <ExpandMoreIcon />
                      </IconButton>
        </div>

    </div>
  )
}

export default Header;
