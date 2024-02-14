import React, { useState } from 'react';
import Home from './Home';
;

export default function About(props) {
  const [myStyle, setmyStyle] = useState({
    marginTop: '17px',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '7px',
    padding: '6px',
  });
const [btntext, setbtntext] = useState("Enable light mode")
  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setmyStyle({
        marginTop: '10px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '6px',
      });

      setbtntext ("Enable dark mode")
    } 
    else {
      setmyStyle({
        marginTop: '17px',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '7px',
        padding: '6px',
      });
      setbtntext ("Enable light mode")
    }
  };

  return (
    <>
 <Home></Home>
      <div className="container" style={myStyle}>
        <h1>About us</h1>
        <p>Hello! We are a company that helps people convert their text into other properties.</p>
        <div className="alert alert-warning">
          <strong>Warning!</strong>
          {props.warning}
        </div>
        <button className="btn btn-primary" onClick={toggleStyle}>
         {btntext}
        </button>
      </div>
    </>
  );
}
