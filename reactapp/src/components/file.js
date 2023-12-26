import React, {useState} from 'react'

export default function TextForm(props){
    const uppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clear = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleCopy = ()=>{
        console.log("copy")
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return(
        <div className="container" style={{color: props.mode==='dark'?'white':'dark'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 mt-4">
        <textarea className="form-control" placeholder="Write here...." value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'dark'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={uppercase}>Convert To Upper Case</button>
        <br/>
        <button className="btn btn-primary mt-2" onClick={lowercase}>Convert To Lower Case</button>
        <br/>
        <button className="btn btn-primary mt-2" onClick={handleCopy}>Copy Text</button>
        <br/>
        <button className="btn btn-primary mt-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <br/>
        <button className="btn btn-danger mt-2 " onClick={clear}>Clear Text</button>
        
        <div className="container my-3 text-center" style={{color: props.mode==='dark'?'white':'dark'}}>
        <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </div>
    )
}
