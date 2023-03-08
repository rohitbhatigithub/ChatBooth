import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from "./Signup";
import Signin from './Signin';
import ChatBox from './ChatBox';
import "./App.css";
function App() {
 
  return (
    <div className= 'App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/chatbox" element={<ChatBox/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
