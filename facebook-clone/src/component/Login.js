import '../styles/Login.css'
import logo1 from "../images/facebook_logo.png"
import logo2 from "../images/Facebook-Logo.png"
import { Button } from '@material-ui/core';


function Login(){
  const signIn = ()=>{
    // signin
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
