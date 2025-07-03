import React, { useState } from "react"

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = () => {
    // console.log("Clear was clicked");
    setText("");
    props.showAlert("Text cleared!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () => {     // Copy text to clipboard
    var textBox = document.getElementById("myBox");
    navigator.clipboard.writeText(textBox.value);
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
      <h1 >{props.heading} </h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}></textarea>
         </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
         <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
         <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text</button>
         <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
         <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
    <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters </p>
    <p>{ 0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)} Minutes read</p>
    <h2>your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{ 0.008 * text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
       </div>
    </>
  )
  }