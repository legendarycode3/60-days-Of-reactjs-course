**MASTERING REACTJS COURSE WITH EXCERCISES** <br/>


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



**COMPONENTS, PROPS, SHORTCUTS IN REACT - LESSON 2** </br>
✔️ What is Component ? </br>
Is one of the most important features of Reactjs called “Component”. </br>
A component is just a piece of  a website.  </br>
To create a “component” in React, we goona use a function. </br>
Components are designed to be reusable(using attribute). </br>
Components lets us create our own  HTML elements. </br>

NOTE: We can have  “components” inside of a component. It helps us split our website , 		into smaller & smaller components or smaller and smaller pieces. </br>
✔️ Fragment: In Reactjs, we use it to group elements together. It helps us not to have extra div, if we don’t. </br>

✔️ What is Props ?  </br>
Every “component function”, gets one parameter called props. </br>
The “props”  parameter is an object and it will contain all the attributes that we give to any component.  </br>
Props, is the short form for properties. </br>
Using the “props object” we can access our attribute & also make our components reusable. </br>

✔️ShortCuts Commonly Used In Reactjs ? </br>
Some “shortcuts” that are commonly used in React, they include </br>
1) Using javascript instead of doing this  **const message = props.message; and const sender = props.sender;**  We can use this **const {message, sender} = props;** which is a shortcut for that 2 different const variables. And this shortcut is called “destructuring”. </br>




STATE, EVENT HANDLERS, CREATE THE CHATBOT FEATURES - LESSON 3 </br>
