import './App.css';
import {useState, useEffect} from 'react';

const NameDisplay = (props) => {
  return (
    <>
    <h3>Name: {props.name}</h3> 
     <h3>Age: {props.age}</h3>
    <h3>School: {props.school}</h3> 
    </>
  )
}

const Counts = ()=>{
  const [counter, setCounter] = useState(100);

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>-</button>
    </div>
  );
}





const App = () => {

  const name = "Peter"
  let isShowing = false
  if (name) {
    isShowing = true
  }
  
  return (
    <div className="App">
      <h1>Hello {isShowing ? name : "dear!"}</h1>
      {name ? "" :
        <>
          <h2>input your name pls</h2>
          <h2>We would love to have you using our app</h2>
        </>}
      <div className="App">
        <NameDisplay name ={name} age={25} school="ABUAD" / >
      </div>

      
      <Counts/>

    </div>
  );

 
  
}

export default App;




  // useEffect(()=>{
  //    setCounter(100)  //this helps to update the state using the state setter 
  // },[])