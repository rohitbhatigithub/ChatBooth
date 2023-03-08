import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {useChatContext} from "./Context"
import {getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "./Firebase";
function Signup() {
  const [email,setEmail] = useState('');
  const [password , setPassowrd] = useState(''); 

  const ChatWithsignUp = useChatContext();
  console.log(ChatWithsignUp)
  const provider = new GoogleAuthProvider();
  const Auth  = getAuth(app)
  const navigate = useNavigate();
  
  ///sign in with google
  const signInWithGoogle = async()=>{
    ChatWithsignUp.setItem(provider.providerId)
    await signInWithPopup(Auth , provider).then(()=>navigate("./chatbox")).catch((error)=>console.log(error));
  }
  
  //signup.....
  const signup = async ()=>{
    ChatWithsignUp.setItem(email)
   await createUserWithEmailAndPassword(Auth , email,password).then(()=>navigate("/signin")).catch((error)=>console.log(error));
  }
  return (
    <div className='signup'>
     <div className='signupContainer'>
       <p className='userName'>Signup</p>
      
       <input type="email" required
        placeholder='Enter email ...'
        onChange={(e)=>setEmail(e.target.value)}
       />
       <input type="password" required
        placeholder='Enter password ...'
        onChange={(e)=>setPassowrd(e.target.value)}
       />
       <button className='signup-btn' onClick={()=>signup()}>Create an account</button>
       <p className='signup_route'>If you have already an account click here <Link to="signin">Login</Link></p>
       <button className='signup-btn' onClick={()=>signInWithGoogle()}>signin with google</button>
       </div>
    </div>
  )
}

export default Signup
