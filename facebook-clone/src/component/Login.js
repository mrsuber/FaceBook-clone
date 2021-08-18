
import '../styles/Login.css'
import logo1 from "../images/facebook_logo.png"
import logo2 from "../images/Facebook-Logo.png"
import { Button } from '@material-ui/core';
import {auth,provider} from '../config/firebase'
import{actionTypes} from '../reducer'
import {useStateValue} from "../Stateprovider"

function Login(){

  const [state,dispatch] = useStateValue();
  const signIn = ()=>{
    // signin
    auth.signInWithPopup(provider)
    .then(result=>{
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    })
    .catch((error)=>alert(error.message))
  }
  return(
    <div className="login">
        <div className="login_logo">
          <img src={logo1} alt=""/>
          <img src={logo2} alt=""/>
        </div>
        <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
