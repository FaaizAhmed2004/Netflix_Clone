import React, { useState } from 'react'
import "./Login.css"
import logo from '../../assets/logo.png'
import { login,signUp } from '../../../Firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'





const Login = () => {
 
  const[signState, setsignState] =useState("Sign In")
 const [name ,setName] = useState("");
 const[email,setEmail] = useState("");
 const [password ,setpassword] = useState("");
const [loading , setloading] = useState (false);
 const user_auth = async (event)=>{
  event.preventDefault();
  setloading(true);
if(signState === "Sign In"){
  await login(email,password);
}else{
  await signUp(name,email,password);
}
setloading(false);
 }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" srcset="" />
    </div>:
    <div className='Login'>
<img src={logo} alt="" className='login-logo' />
<div className="login-form">
  <h1>{signState}</h1>
  <form>
    {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}}
     type="text" placeholder='Your Name' />:<></>}
    <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} 
    type="email" placeholder='Your Email' />
    <input value={password} onChange={(e)=>{setpassword(e.target.value)}}
    type="password" placeholder='Password' />
    <button onClick={user_auth} type='submit'>{signState}</button>
    <div className="form-help">
      <div className="remember">
        <input type="checkbox"  />
        <label htmlFor=''>Remember Me</label>
      </div>
      <p>Help Me?</p>
    </div>
  </form>
  <div className="form-switch">
    {signState==='Sign In'?
    <p>New to Netflix?<span onClick={()=>{setsignState("Sign Up")}}>
      Sign Up Now</span></p>
    :<p>Already have Account?<span onClick={()=>{setsignState("Sign In")}}>Sign In Now</span></p>
}
  </div>
</div>
    </div>
  )
}

export default Login
