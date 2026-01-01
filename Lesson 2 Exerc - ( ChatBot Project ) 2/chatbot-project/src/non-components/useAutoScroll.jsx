// import { useRef, useEffect } from 'react'

// /*
//   CREATING OUR CUSTOM HOOK (PUTING HOOK TOGETHER IN ONE FUNCTION)
// */

// export function useAutoScroll(dependencies) {
  
//   const containerRef =  useRef(null);

  

//   /*
//   - WE USING useEffect(), HOOK HERE, FOR CHATS TO AUTOMATICALLY SCROLL (LOAD)
//   - REACT WILL RUN THIS useEffect() FUNCTION inside it, AFTER THE COMPONENT IS CREATED..
//   ` 
//   */
//   useEffect(() => {
//     // console.log('updated');

//     //console.log(chatMessagesRef.current);
//     // const containerElem = chatMessagesRef.current;
    
//     const containerElem = containerRef.current;
//     if(containerElem){
//       containerElem.scrollTop = containerElem.scrollHeight;
//     }
//     /*
//       - WE PUT THIS CODE "chatMessagesRef.current", 
//         BECUS , React.useEffect RUNS AFTER THE COMPONENT IS CREATED.
//         - THEREFORE , WE NEED TO WAIT FOR THE COMPONENT TO BE CREATED 1st , THEN WE CAN NOW ACCESS THIS "HTML ELEMENT" FOR OUR SCROLLING FUNCTIONALITY chatMessagesRef.current
//     */
    
//   // }, [chatMessages]);
//     }, [dependencies]);

//     return containerRef;
//   }