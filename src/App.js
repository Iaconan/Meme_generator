// import React from "react";
// import Header from "./components/Header";
// import Meme from "./components/Meme";



// export default function App() {
//   return(
//     <div>
//       <Header/>
//       <Meme/>
//     </div>

    
//     ) 
// }

// differenze tra props e state

// function addTwoNumbers(a, b) {
//   a = 42
//   return a + b
// }
// addTwoNumbers(1, 2)

// function Navbar(props) {
//   props.coverImage = "something else"
// }

// <Navbar darkMode={true} coverImage="some-image2" />


// function greeting(name) {
//   const date = new Date()
//   const hours = date.getHours()  

//   let timeOfDay
//   if (hours >= 4 && hours < 12) {
//     timeOfDay = "morning"
//   }else if(hours >= 12 && hours <17) {
//     timeOfDay = "afternoon"
//   }else if(hours >= 17 && hours < 20) {
//     timeOfDay = "evening"
//   }else {
//     timeOfDay = "night"
//   }
//   return `Good ${timeOfDay}, ${name}!`

// }

// console.log(greeting("Tommy"))

// How would you describe the concept of "state"?
// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)


// When would you want to use props instead of state?
// Anytime you want to pass data into a component so that 
// component can determine what will get displayed on the screen.



// When would you want to use state instead of props?
// Anytime you want a component to maintain some values from 
// within the component. (And "remember" those values even when React re-renders the component)


// What does "immutable" mean? Are props immutable? Is state immutable?
// Unchanging. Props are immutable. State is mutable.


// USESTATE

import React from "react"

export default function App() {


  const result = React.useState("Yes")
  console.log(result)
  return (
    <div className="state">
      <h1 className="state-title">Is state important to know?</h1>
      <div className="state-value">
        <h1>{result}</h1>
      </div>
    </div>
  )
}


