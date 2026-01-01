// import { useRef, useEffect } from 'react'

//DEFAULT IMPORT OF "ROBOT IMAGE"
import RobotProfileImage from '../assets/robot.png'
//DEFAULT IMPORT OF "USER IMAGE"
import UserProfileImage from '../assets/user.png'

import './ChatMessage.css'
 
 
 export function ChatMessage({message, sender}) {
    // const message = props.message;
    // const sender = props.sender;

    //// OBJECT DESTURING 
    // const {message, sender} = props;

    // I COMMENTED THIS if(){} STATEMENT, BECUS WE ARE USING THE "GUARD OPERATOR or AND OPERATOr && " BY INSETING THE if(){} STATEMENT DIRECTLY WITH A GUARD OPERATOR DIRECTLY INSIDE OUR "JSX"
    /*
    if(sender === 'robot') {
      return (
        <div>
          <img src="robot.png" width="50" />
          {message}
        </div>
      );
    }
    */

      return (
        <div className={sender === 'user' 
          ? 'chat-message-user' 
          : 'chat-message-robot'
        }>

          {sender === 'robot' && (
            <img src={RobotProfileImage} className="chat-message-profile" />
          )}
          

          <div className="chat-message-text">
            {message}
          </div>
          {sender === 'user' && (
            <img src={UserProfileImage} className="chat-message-profile" />
          )}

        </div>
        // I ADDED THE "message" AS WELL IN A <div> SO THAT WE CAN STYLE IT IN CSS
      );
  }



  // INSTEAD OF USING A VARIABLE TO SAVE OUR APP. A BEST PRACTICE IS TO USE "A COMPONENT TO CREATE THE APP" 
  /*
  const app = (
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




  /*
    - CURRENTLY Function "ChatMessages" IS JUST A NORMAL VARIABLE. 
    - WHEN WE UPDATE "ChatMessages" IT WILL NOT UPDATE THE "Html"
    - TO SOLVE THIS, WE CAN CONVERT "ChatMessages" INTO (STATE), WHEN WE UPDATE THE "ChatMessages" IT WILL UPDATE THE HTML
  */


    /*
      INSTEAD OF MANUALLY TYUPING A NEW CHART MESSAGE COMPONENT, WE WILL USE "JAVASCRIPT" TO GENERATE THIS COMPONENTS. WE GOONA DO (2 STEPS)

      1. SAVE THE DATA (DATA MEANS INFORMATION) 
      //2nd step GENERATING THE HTML
  */
//function ChatMessages({chatMessages}) {

  /* React.useRef -> LETS US AUTOMATICALLY SAVE AN HTML ELEMENT
  */
// const chatMessagesRef = React.useRef(null);


