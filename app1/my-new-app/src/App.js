import './App.css';

const NameDisplay = (props) => {
  return (
    <>
    <h3>Name: {props.name}</h3> 
     <h3>Age: {props.age}</h3>
    <h3>School: {props.school}</h3> 
    </>
  )

}


const App = () => {
  const name = "jane"
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

    </div>
  );
}

export default App;
