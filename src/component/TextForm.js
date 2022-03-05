import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase Was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        console.log("Uppercase Was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black' }}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black' }}>
            <h2>You text Summary</h2>
            <p>{text.split(" ").length-1} Words & {text.length} Characters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter text above to preview'}</p>
        </div>
        </>
    )
}
