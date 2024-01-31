import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpCLick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLoCLick = ()=>{
        console.log("Lowercase was clicked"+text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText("New text");
    return (
        <>
            <div className="container my-2">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={handleUpCLick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleLoCLick}>Convert to Lowercase</button>
                </div>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words {text.length} Characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
