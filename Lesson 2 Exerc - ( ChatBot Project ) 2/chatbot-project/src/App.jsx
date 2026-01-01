//PACKAGES FILES
import { useState } from 'react'

// JAVASCRIPT FILES IMPORT (NEXT)
import { ChatInput } from './components/ChatInput.jsx'

import ChatMessages from './components/ChatMessages.jsx'


// IMPORTING THE "Chatbot" OBJECT (WHICH IS USED IN asyn await) OF  THE  "simplesimpledev" EXTERNAL LIBRARY WE JUST INSTALLED OUR SELF , USING npm install supersimpledev. WHICHIS LOCATED AT node_modules FOLDER
// import {  Chatbot } from 'supersimpledev'


// OTHER FILES IMPORTS(NEXT)
//DEFAULT IMPORT OF "ROBOT IMAGE"
import RobotProfileImage from './assets/robot.png'

//DEFAULT IMPORT OF "USER IMAGE"
import UserProfileImage from './assets/user.png'

import './App.css'





function App() {
      /*
          INSTEAD OF MANUALLY TYUPING A NEW CHART MESSAGE COMPONENT, WE WILL USE "JAVASCRIPT" TO GENERATE THIS COMPONENTS. WE GOONA DO (2 STEPS)

          1. SAVE THE DATA (DATA MEANS INFORMATION) 
      */

        //NOTE: ARRAY IS A LIST OF VALUES.  AN "OBJECT" GROUP RELATED VALUES TOGETHER.
        //1ST - step SAVING THE DATAs
      // const chatMessages = [
      //   {message: 'hello chatbot', sender: 'user', id: 'id1'},
      //   {message: 'hello chatbot', sender: 'robot', id: 'id2'},
      //   {message: 'can you get me todays date?', sender: 'user', id: 'id3'},
      //   {message: 'Today is September 27', sender: 'robot', id: 'id4'}
      // ];

      // //2nd step GENERATING THE HTML
      // const chatMessageComponents = chatMessages.map((chatMessage) => {
      //   return(
      //     <ChatMessage
      //       message={chatMessage.message}
      //       sender={chatMessage.sender}
      //     />
      //   );
      // });


      /*
      return (
        <>
          <ChatInput></ChatInput>
          <ChatMessage 
            message="hello chatbot" 
            sender="user" 
          />
          <ChatMessage 
            message="Hello! How can i help you?" 
            sender="robot" 
          />
          <ChatMessage 
            message="can you get me todays date?" 
            sender="user" 
          />
          <ChatMessage 
            message="Today is September 27" 
            sender="robot" 
          />
        </>
      );
      */

      //WE ARE NOW GEENRATING ALL THE "CHATMESSAGE" WITH JAVASCRIPT COMPONENTS INSTEAD OF WRITING IT
      // return (
      //   <>
      //     <ChatInput></ChatInput>
          
      //     {chatMessages.map((chatMessage) => {
      //       return(
      //         <ChatMessage
      //           message={chatMessage.message}
      //           sender={chatMessage.sender}
      //           key={chatMessage.id}
      //         />
      //       );
      //     }
      //     )
      //     }

      //   </>
      // );


      const [chatMessages, setChatMessages] = useState(
        [
          // {
          //   message: 'hello chatbot', 
          //   sender: 'user', 
          //   id: 'id1'
          // },
          // { message: 'Hello! How can i help you?',
          //   sender: 'robot', 
          //   id: 'id2'
          // },
          // { message: 'can you get me todays date?', 
          //   sender: 'user', 
          //   id: 'id3'
          // },
          // { message: 'Today is September 27', 
          //   sender: 'robot', 
          //   id: 'id4'
          // }
        ]
        
      ); 
      
        
        

      return (

        <div className="app-container">
          {
            /* CHECK , IF THERE IS NO "chatMessages" DISPLAY A WELCOME MESSAGE THEN */
            (chatMessages.length === 0) && (
              <p className="welcome-message">
                  Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )
          }

          <ChatMessages
            chatMessages={chatMessages}
          />

          <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          >
          </ChatInput>
        </div>
      );
    }

export default App
