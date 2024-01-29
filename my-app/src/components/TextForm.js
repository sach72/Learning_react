import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpCLick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter the text here!');
    // setText("New text");
    return (
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleUpCLick}>Convert to Uppercase</button>
                </div>
            </div>
    )
}
