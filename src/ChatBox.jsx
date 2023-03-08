import React, { useEffect, useState } from 'react'
import userImage from "./user.jpeg"
import { getDatabase, ref, set, push, onChildAdded } from "firebase/database";
import { useChatContext } from "./Context"
import { getAuth } from "firebase/auth"
function ChatBox() {
    // eslint-disable-next-line no-unused-vars
    const auth = getAuth()
    const firebase = useChatContext();
   // const { uid } = auth.currentUser;
    const [userData, setUserData] = useState([]);
    const [msg, setMsg] = useState({ message: '' });
    const [userId , setUserId] = useState()
   
    const db = getDatabase();
    const x = async (e) => {
        e.preventDefault();
       
        let chatRef = ref(db, 'posts');
        const newPostRef = push(chatRef);
       await set(newPostRef, {
            msg: msg,
            email:firebase.item
            // uid
        });
        console.log(newPostRef)
        setMsg({ message: '' })
    }
    useEffect(() => {
        setUserId(firebase.item)
        let chatRef = ref(db, 'posts');
        onChildAdded(chatRef, (data) => {
            setUserData(userData => [...userData, data.val()])
        })
    }, [db, firebase.item])
    return (
        <div className='chatbox'>
            <div className='main'>
                {/* navbar */}
                <div className='chatbox_navbar'>
                    <div className='first'>
                        <img src={userImage} alt="userImage" />
                        <div className='user_name'>
                            <p className='name'>{userId}</p>
                            <div className='status'>
                                <span className='dot'>.</span>
                                <p className='online'>online</p>
                            </div>
                        </div>
                    </div>
                    <div className='second'>
                        <div className='user_Option'>                      
                            <i class="fa fa-video-camera" aria-hidden="true"></i>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            
                        </div>
                    </div>
                </div>
                {/* message */}

                <div className="msgs">
                    {userData.map((item, id) => (
                        <div>
                            <div key={id} className={`msg ${item.email === firebase.item ? 'sent' : 'received'}`}>
                                <p className='text'>{item.msg.message}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* input field */}
                <div className='chatfield'>
                    <form onSubmit={x}>
                        <input type="text"
                            placeholder='message...'
                            className='input_field'
                            onChange={(e) => setMsg({ message: e.target.value })}
                            value={msg.message}
                        />
                        <button type="submit" className='btn'><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatBox
