import { useRef, useEffect } from 'react'


import { ChatMessage  } from './ChatMessage.jsx';

import './ChatMessages.css'

  
  
function ChatMessages({ chatMessages }){

    const chatMessagesRef = useAutoScroll([chatMessages])


    function useAutoScroll(dependencies) {
    
    const containerRef =  useRef(null);

    /*
    - WE USING useEffect(), HOOK HERE, FOR CHATS TO AUTOMATICALLY SCROLL (LOAD)
    - REACT WILL RUN THIS useEffect() FUNCTION inside it, AFTER THE COMPONENT IS CREATED..
    ` 
    */
    useEffect(() => {
        // console.log('updated');

        //console.log(chatMessagesRef.current);
        // const containerElem = chatMessagesRef.current;
        
        const containerElem = containerRef.current;
        if(containerElem){
        containerElem.scrollTop = containerElem.scrollHeight;
        }
        /*
        - WE PUT THIS CODE "chatMessagesRef.current", 
            BECUS , React.useEffect RUNS AFTER THE COMPONENT IS CREATED.
            - THEREFORE , WE NEED TO WAIT FOR THE COMPONENT TO BE CREATED 1st , THEN WE CAN NOW ACCESS THIS "HTML ELEMENT" FOR OUR SCROLLING FUNCTIONALITY chatMessagesRef.current
        */
        
    // }, [chatMessages]);
        }, [dependencies]);

        return containerRef;
    }

  /*
  WE MOVING THIS INTO THE "App()" COMPONENT , SO IT WILL BE VISIBLE AND CAN BE USED IN THE INPUT COMPONENT
  */
  //// CONVERTING "ChatMessages" INTO "STATE" useState
  
  //// SHORT-HAND 2 USED HERE (ARRAY DESTRUCTURING) INSTEAD OF LIKE THIS -> const array = React.useState([]);
  // const [chatMessages, setChatMessages] = React.useState(
  //   [
  //     {
  //       message: 'hello chatbot', 
  //       sender: 'user', 
  //       id: 'id1'
  //     },
  //     { message: 'Hello! How can i help you?',
  //       sender: 'robot', 
  //       id: 'id2'
  //     },
  //     { message: 'can you get me todays date?', 
  //       sender: 'user', 
  //       id: 'id3'
  //     },
  //     { message: 'Today is September 27', 
  //       sender: 'robot', 
  //       id: 'id4'
  //     }
  //   ]
  // ); 


  //// "array[0]" GETS THE CURRENT DATA
  // const chatMessages = array[0]; 

  //// "array[1]" IS A FUNCTION THAT UPDATES THE DATA
  // const setChatMessages = array[1];

  ////ARRAY DESTRUCTURING A (SHORT-HAND) FOR THE CODE ABOVE
  //// SHORT-HAND 1
  // const [chatMessages, setChatMessages] = array;


  // const chatMessages = [
  //   {
  //     message: 'hello chatbot', 
  //     sender: 'user', 
  //     id: 'id1'
  //   },
  //   { message: 'Hello! How can i help you?',
  //     sender: 'robot', 
  //     id: 'id2'
  //   },
  //   { message: 'can you get me todays date?', 
  //     sender: 'user', 
  //     id: 'id3'
  //   },
  //   { message: 'Today is September 27', 
  //     sender: 'robot', 
  //     id: 'id4'
  //   }
  // ];


  


  // THE CODE WAS CREATED FOR PRATICE, SO GOONA BE COMMENTING IT OUT NOW AND REMOVE THE PRACTICE BUTTON AS WELL (THE CODE BELOW)

  // //EVENT HANDLER FUNCTION
  // function sendMessage() {
  //   // INSTEAD OF USING UPDATING DATA DIRECTLY HERE WITH "Event handler".Push, WE GOONA USE THE "useState" UPDATER FUNCTION

  //   // // console.log('send message');
  //   // chatMessages.push({
  //   //   message: 'Test', 
  //   //   sender: 'user', 
  //   //   id: crypto.randomUUID()
  //   // });
  //   // console.log(chatMessages);

  //   // USING THE "spread Operator" WE MADE A COPY OF THE (chatMessages) ARRAY AND THEN WE ADDED A VALUE AT THE END OF THE NEW ARRAY
  //   setChatMessages([
  //     ...chatMessages,
  //     {
  //       message: 'test',
  //       sender: 'user',
  //       id: crypto.randomUUID()
  //     }
  //   ]);
  // }

      // REMOVED THIS ON THE return () <button onClick={sendMessage}> Send Message </button>  -> IT WAS FOR TESTING
      //WE ARE NOW GEENRATING ALL THE "CHATMESSAGE" WITH JAVASCRIPT COMPONENTS INSTEAD OF WRITING IT ON THIS RETURN BELOW
  return(
    // WE TURNED THIS FROM <> FRAGMENT TO A <div> BECAUSE WE WANT TO STYLE IT ON CSS
    <div className="chat-messages-container" ref={chatMessagesRef}>
      

      {chatMessages.map((chatMessage) => {
        return(
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
  
} 


export default ChatMessages;