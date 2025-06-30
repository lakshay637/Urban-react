import React, { useState } from "react"

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () => {     // Copy text to clipboard
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {  // Remove extra spaces
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  } 

  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
    <div className="container"> 
      <h1>{props.heading} </h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
         </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
         <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
         <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text</button>
         <button className="btn btn-primary mx-1" onClick={handleCopy}> CopyText</button>
         <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> RemoveExtraSpaces</button>
    </div>
    <div className="container , my-3">
    <h2>your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{ 0.008 * text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
       </div>
    </>
  )
  }