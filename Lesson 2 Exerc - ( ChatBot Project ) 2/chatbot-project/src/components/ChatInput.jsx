import { useState } from 'react'

import {  Chatbot } from 'supersimpledev'

// WE ADDED COMPONENT CSS FILES
import './ChatInput.css'

//DEFAULT IMPORT OF "USER IMAGE"
import LoadingSpinner from '../assets/loading-spinner.gif'





export function ChatInput({chatMessages, setChatMessages}) {

      //WE ARE SAVING THE "INPUT TEXT" USING (useState)
      const [inputText, setInputText] =  useState('');


      /* ADDING AN "isLoading" STATE TO <ChatInput> THAT WILL REPRESENT - IF IT IS LOADING (WAITING FOR A RESPONSE FROM A CHATBOT) 
        - IF IT IS LOADING, DON'T ALLOW SENDING OF NEW MESSAGE
        - ALSO DON'T ALLOW SENDING OF NEW MESSAGE (if inputText) IS EMPTY
      */
      // const [isLoading, setIsLoading] = React.useState(false);


      // "EVENT HANDLER" FUNCTION FOR THE - INPUTING TEXTBOX (Create a handler function for when the text box changes)
      function saveInputText(event) {
        //console.log(event.target.value);
        setInputText(event.target.value);
      }

      

      function handleKeyDown(event) {
        if(event.key === 'Enter') {
          sendMessage();
          // alert(`You pressed Enter! Input value: ${inputText}`);
        }
        else if (event.key === 'Escape') {
            setInputText('');
        }
      }



      
      // "EVENT HANDLER" FUNCTION FOR THE -  SAVING THE TEXT ON THE BUTTON (Create a handler function for when the button is clicked)
      async function sendMessage() {

        // TO CLEAR THE TEXT ON THE TEXTBOX
          setInputText('');

        // /*
        // - IF IT IS LOADING, DON'T ALLOW SENDING OF NEW MESSAGE.. 
        // - ALSO DON'T ALLOW SENDING OF NEW MESSAGE (if inputText) IS EMPTY 
        // */
        // if(isLoading || inputText === ''){
        //   return;
        // }
        //  // Set isLoading to true at the start, and set it to
        // // false after everything is done.
        // setIsLoading(true);

          //console.log(`Inputered Vale: ${inputText}`);

          const newChatMessages = [
          ...chatMessages,
          {
            // message: 'test',
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
          ];

          //setChatMessages(newChatMessages);

        // setChatMessages([
        //   ...chatMessages,
        //   {
        //     // message: 'test',
        //     message: inputText,
        //     sender: 'user',
        //     id: crypto.randomUUID()
        //   }
        //   ]);


          setChatMessages([
            ...newChatMessages,
            {
              // message: 'test',
              // message: response,
              // THIS MESSAGE HERE , CREATE A TEMPORARY LOADING ... MESSAGE
              message: <img src={LoadingSpinner}className="loading-spinner" />,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);


          /*
            - TO GET RESPONSE USING THE "Chatbot object" -> A EXTERNAL LIBRARY CREATED BY SUPERSIMPLE DEV
            - WE NOW USING "Async/await" TO TAKE SOMETIME BEFORE RESPONDING TO THE
          */
          const response = await Chatbot.getResponseAsync(inputText);
          
          // console.log(response);
          // setChatMessages([
          //   ...chatMessages,
          //   {
          //     // message: 'test',
          //     message: response,
          //     sender: 'robot',
          //     id: crypto.randomUUID()
          //   }
          // ]);
          setChatMessages([
            ...newChatMessages,
            {
              // message: 'test',
              // message: response,
              // THIS MESSAGE HERE , CREATE A TEMPORARY LOADING ... MESSAGE
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);


          // // TO CLEAR THE TEXT ON THE TEXTBOX
          // setInputText('');
      }


      return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to Chatbot" 
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKeyDown}
              className="chat-input"
              >
            </input>

            <button 
              onClick={sendMessage}
              className="send-button"
            >
              Send
            </button>
          </div>
      );
  } 



