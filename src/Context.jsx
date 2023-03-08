import React,{createContext,useContext, useState} from "react";
import { app } from "./Firebase";
const ChatContext = createContext(app);
export const useChatContext = ()=>useContext(ChatContext)
export const ChatProvider = (props)=>{
   const [item , setItem] = useState('');
   
    // const signup = (email,password)=>{
    //     return (createUserWithEmailAndPassword(Auth , email,password).then(()=>alert("success")).catch((error)=>console.log(error)))
    // }
    // const signIn = (email,password)=>{
    //     return (signInWithEmailAndPassword(Auth,email,password).then(()=>alert("sign-in successfully register")).catch((error)=>console.log(error)))
    // }
    // const putData = (key  , data)=>set(ref(db,key),data);
    // console.log(putData)
   return <ChatContext.Provider value={{item,setItem}}>{props.children}</ChatContext.Provider>
}