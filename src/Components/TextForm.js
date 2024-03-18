import React, {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('');
    
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase","success");
    }
    const handleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success");
    }
    const handleClearText=()=>{
        let newText = ' ';
        setText(newText);
        props.showAlert("Text is cleared","success");
    }
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");

    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    
    const handleOnChange= (event)=>{
        console.log("Onchange")
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control"  value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
        </div>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.08 * text.split(' ').length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something int the text box above to preview it here"}</p>
        </div>
        </>
    )
}
