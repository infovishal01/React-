import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('hello');
  }
  return (
    <div>
      <h1>Value of num is  {num} <br/> value of user is { users} </h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App