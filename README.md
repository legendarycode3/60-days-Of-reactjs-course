## MASTERING REACTJS COURSE WITH EXCERCISES <br/>


➡️ **REACT BASICs, JSX  --  LESSON**  </br>
✔️ What is Reactjs ?  </br>
React is an external library that helps us create websites easier. </br>

✔️ What is JSX ? </br> </br>
Javascript XML Is a syntax extension for javascript that allows developers to write HTML -like markup directly within  their Javascript code. </br>
JSX looks very similar to HTML but it is not (becus it has different syntax). </br>

NOTE: JSX is more strict than  normal HTML.  All elements need a closing tag.  </br>
E.g  </br>
<input placeholder="Send a message to Chatbot" size="30"></input>  </br>
But if you not goona put anything inside or nothing inside our element , you can use a “self closing tag” like this <input /> </br>


✔️ What is Babel ?  </br>
Babel is known as a “Javascript compiler”. It basically translate other languages into javascript. </br>
Why do we need Babel: </br>
When using “React”, we actually don’t use normal javascript, we use an “enhanced version of javascript” called JSX.  </br>
JSX stands for “Javascript  XML”. Is the same as javascript but we can also write HTML directly in our javascript code.	</br>



➡️ **COMPONENTS, PROPS, SHORTCUTS IN REACT - LESSON 2** </br>
✔️ What is Component ? </br>
Is one of the most important features of Reactjs called “Component”. </br>
A component is just a piece of  a website.  </br>
To create a “component” in React, we goona use a function. </br>
Components are designed to be reusable(using attribute). </br>
Components lets us create our own  HTML elements. </br>

NOTE: We can have  “components” inside of a component. It helps us split our website , into smaller & smaller components or smaller and smaller pieces. </br>
✔️ Fragment: In Reactjs, we use it to group elements together. It helps us not to have extra div, if we don’t. </br>

✔️ What is Props ?  </br>
Every “component function”, gets one parameter called props. </br>
The “props”  parameter is an object and it will contain all the attributes that we give to any component.  </br>
Props, is the short form for properties. </br>
Using the “props object” we can access our attribute & also make our components reusable. </br>
Props, helps us to be able to pass data from one component to another. To display something specific & not create & not create multiple similar components (for every little change). You typical do it from a parent component to a child component. </br>

✔️ShortCuts Commonly Used In Reactjs ? </br>
Some “shortcuts” that are commonly used in React, they include </br>
1) Using javascript instead of doing this  **const message = props.message; and const sender = props.sender;**  We can use this **const {message, sender} = props;** which is a shortcut for that 2 different const variables. And this shortcut is called “destructuring”. </br>




➡️ **STATE, EVENT HANDLERS - LESSON 3** </br>
✔️ What Is State ?  </br>
State is a built-in object that allows components to store and manage dynamic data that changes over time. State helps us make a website interative. </br>
“State” is a data that is connected to the HTML (meaning , when we update the data , it will update the HTML). To convert data’s into state, we use React.useState() & useState() givs us two values (which are: The current data & Updater function).  </br>
“State” is like a React component brain. It holds the information the components that can change over-time. </br>
When a component state changes (usually in response to users input or an API call),  React automatically re-renders the component to reflect the new data in the UI. </br>

NOTE: Keep in mid that in React (State) , anything that starts with “use” , is typically refered to as a Hook (e.g useState) </br>

✔️ What Is useState? </br>
 The useState hook in React allows functional components to have State. Which is local memory for data that needs to change over time or across user interaction. </br>
In modern React, the useState hook is used to add state to functional components. </br>
This mechanism allows components to be dynamic and interactive , reacting to changes without a full page refresh. </br>

✔️ Differences Between “State” And “useState”?  </br>
State: State is a core concept. It refers to the data or properties that a component needs to remember overtime. The data can always change based on user interactions or network responses, and when it does, React re-renders the component to update the user interface. </br>
useState: useState is a specific tool(a Hook) provided by React to manage that concept within functional components to use State. </br>
To use the “useState” , you call the “useState” within a functional components to declare a state variable ,. It returns an array  containing (the following 2 properties): </br>
