import React from 'react';
import './App.css';
import Details from './components/Shop/Details';


function App() {
  
  return (
    <div className="App" >
      <h1><b>Online Courses With Expert Instructors </b></h1>
      <h2 style={{color:'yellow'}}>Enroll Now</h2>
      <br/><br/><br/>
      <Details></Details>
    </div>
  );
}

export default App;
