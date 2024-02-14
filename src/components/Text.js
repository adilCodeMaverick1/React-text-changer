import React, { useState } from 'react';





export default function Text(props) {
  const handleUpClick = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert ("Converted to uppercase","success");
  };

  const handleloClick = () => {
    console.log("erase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert ("Erased","warning");
  };

  const handleCopyClick = () => {
    console.log("lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert ("Converted to LowerCase","success");
  };

  const CopyClick = () => {
    let text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert ("Coppied to clipboard","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

 

  const handleCamelCaseClick = () => {
    // Convert text to camel case
    let newText = text
      .toLowerCase()
      .replace(/[-_]+/g, ' ')
      .replace(/ (.)/g, function ($1) {
        return $1.toUpperCase();
  
      })
      .replace(/ /g, '');
    setText(newText);
    props.showAlert ("Coverted to camel case","success");

  };

  const handleAddSpacesClick = () => {
    let newText = text.replace(/([A-Z])/g, ' $1').trim(); // Insert space before uppercase letters
    setText(newText);
  };

  const [text, setText] = useState("Enter Text here");

// xxxxxxxxxxxxxxx
const [textBg, setmyStyle] = useState({

  marginTop:'20px',
 
  borderRadius:'10px',
});
const [btntext, setbtntext] = useState("Enable red color")
// const [socolor, setsoc] = useState(null);
const setOrange = () => {
  if (textBg.backgroundColor === 'orange') {
    setmyStyle({
      marginTop:'20px',
      backgroundColor:'red',
      borderRadius:'10px',
    });

    setbtntext ("Enable orange color")
  } 
  else {
    setmyStyle({
      marginTop:'20px',
      backgroundColor:'orange',
      borderRadius:'10px',
    });
    setbtntext ("Enable red color")
  }
};

  return (
    <>
      <div className="container p-5" style={textBg}>
        <h1 className='my-5'>{props.topheading}</h1>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            name=""
            id="mybox"
            cols="30"
            rows="4"
            className='form-control'
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white'}}
          ></textarea>
        </div>
        <button className={`btn btn-outline-${props.socolor.type} mx-1`} onClick={handleUpClick}> UPPERCASE</button>
        <button className={`btn btn-outline-${props.socolor.type} mx-1`} onClick={handleloClick}>Erase</button>
        <button className={`btn btn-outline-${props.socolor.type} mx-1`} onClick={handleCopyClick}>lowercase</button>
        <button className={`btn btn-outline-${props.socolor.type} mx-1`} onClick={CopyClick}>CopyText</button>
        <button className={`btn btn-outline-${props.socolor.type} mx-1`} onClick={handleCamelCaseClick}> Camel Case</button>
        <button className={`btn btn-outline-${props.socolor.type} mx-1`} onClick={handleAddSpacesClick}> Add spaces</button>
        <button className={`btn btn-outline-${props.socolor.type} mx-1`} onClick={setOrange}>  {btntext}</button>
      </div>

      <div className="container">
        <h1 className="my-3">Text Summary</h1>
        <p>Letters {text.length} Words {text.split(" ").length}</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to Preview here"}</p>
      </div>

      <hr />
    </>
  );
}
