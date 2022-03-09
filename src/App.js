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

// import React from "react"

// export default function App() {


//   const [isImportant, func] = React.useState("Yes")
//   console.log(isImportant)
//   return (
//     <div className="state">
//       <h1 className="state-title">Is state important to know?</h1>
//       <div className="state-value">
//         <h1>{isImportant}</h1>
//       </div>
//     </div>
//   )
// }



// import React from "react"

// export default function App() {


//   const [count, setCount] = React.useState(0)
//   function countMinus() {
//     setCount(count - 1)
//   }
  
//   function countPlus() {
//     setCount(count + 1 )
//   }
//   return (
//     <div>
//       <button onClick={countMinus} className="counter-minus">-</button>
//       <div className="counter-count">
//         <h1>{count}</h1>
//       </div>
//       <button onClick={countPlus} className="counter-plus">+</button>
//     </div>
//   )

// }


// CallBack


// import React from "react"

// export default function App() {


//   const [count, setCount] = React.useState(0)

  // Note: if you ever need the old value of state
  // to help you determine the new value of state,
  // you should pass a callback function to your 
  // state setter function instead of using 
  // state directly. This callback function will 
  // receive the old value of state as its parameter,
  // which you can then use to determine your new 
  // value of state.


//   function countMinus() {
//     setCount(prevCount => prevCount - 1)
//   }
  
//   function countPlus() {
//     setCount(prevCount => prevCount + 1)
//   }
//   return (
//     <div>
//       <button onClick={countMinus} className="counter-minus">-</button>
//       <div className="counter-count">
//         <h1>{count}</h1>
//       </div>
//       <button onClick={countPlus} className="counter-plus">+</button>
//     </div>
//   )

// }



// You have 2 options for what you can pass in to a state 
// setter function (e.g. `setCount`). What are they?

// a. New value of state (setCount(42))
// b. Callback function - whatever the callback function returns === new value of state


// When would you want to pass the first option (from answer above) 
// to the state setter function?

// Whenever you don't need the previous value of state to determine 
// what the new value of state should be.



// When would you want to pass the second option (from answer above)
// to the state setter function?

// Whenever you DO need the previous value to determine the new value

// import React from "react"

// export default function App() {


//   const isGoingOut = true

//   let answer = isGoingOut === true ? "Yes" : "No"
  

//   return (
//     <div className="state">
//       <h1 className="state-title">Do I feel like going out tonight?</h1>
//       <div className="state-value">
//         <h1>{answer}</h1>
//       </div>
//     </div>
//   )

// }


// import React from "react"

// export default function App() {



//   const [isGoingOut, setIsGoingOut] = React.useState(true)

// function changeMind() {
//   setIsGoingOut(prevState => prevState ? false : true)
// }

//   return (
//     <div className="state">
//       <h1 className="state-title">Do I feel like going out tonight?</h1>
//       <div onClick={changeMind} className="state-value">
//         <h1>{isGoingOut ? "Yes" : "No"} </h1>
//       </div>
//     </div>
//   )

// }


// COMPLEX STATE: object 

import React from "react"

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })


  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png" 


  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }))
  }

  return(
    <main>
      <article className="card">
        <img className="card-image" src="./images/user.png"/>
        <div className="card-info">
          <img onClick={toggleFavorite} className="card-favorite" src="../images/star-empty.png"/>
        </div>
      </article>
    </main>
  )
}