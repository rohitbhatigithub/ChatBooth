import React, { useState } from 'react';
import {useChatContext} from "./Context";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {app} from "./Firebase"
function Signup() {
  const[email,setEmail] = useState('');
  const [password,setPassowrd] = useState('');
  const Auth = getAuth(app);
  const navigate = useNavigate();
  const ChatWithsignUp = useChatContext();
const ChatWithSignIn = async ()=>{
  ChatWithsignUp.setItem(email)
 await signInWithEmailAndPassword(Auth , email , password).then(()=>navigate("/chatbox")).catch((error)=>console.log(error))
}
  return (
    <div className='signup'>
     <div className='signupContainer'>
       <p className='userName'>Sign in</p>
       <input type="email" required
        placeholder='Enter email ...'
        autoComplete='on'
        onChange={(e)=>setEmail(e.target.value)}
       /> 
       <input type="password" required
        placeholder='Enter password ...'
        onChange={(e)=>setPassowrd(e.target.value)}
       />
       <button className='signup-btn' onClick={()=> ChatWithSignIn()}>Sign-in</button>
       <p className='signup_route'>If you have not  an account click here <Link to="/">Sign-up</Link></p>
       
       </div>
    </div>
  )
}

export default Signup
