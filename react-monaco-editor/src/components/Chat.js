import React, { useEffect } from "react";
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './Chat.css';

function Chat() {
    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
    }, []);
   
    var firebaseConfig = {
        apiKey: "AIzaSyB2J2-3GIU4V73-7_TAZRuQQTAFjXq0pmE",
        authDomain: "chat-app-5db18.firebaseapp.com",
        databaseURL: "https://chat-app-5db18-default-rtdb.firebaseio.com",
        projectId: "chat-app-5db18",
        storageBucket: "chat-app-5db18.appspot.com",
        messagingSenderId: "321595002651",
        appId: "1:321595002651:web:ad5fcda1475fb327744dbe",
    };

 


    // const username = prompt("Please Tell Us Your Name");

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        // get values to be submitted
        const timestamp = Date.now();
        const message = newMessage;

       
       
         
    }
    return (
        <div className="Chat">
            <Widget
                handleNewUserMessage={handleNewUserMessage} />
        </div>
    );
}

export default Chat;