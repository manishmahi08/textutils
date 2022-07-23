import React, {useState} from 'react'

export default function TextForm(props) {

    const handleOnUppercase = ()=>{
        setText(text.toUpperCase())
    }
    const handleOnLowercase = ()=>{
        setText(text.toLowerCase())
    }
    const handleCopy = ()=>{
        var copyText = document.getElementById("myBox");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
    }
    const handleOnClear = ()=>{
        setText('');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor: props.mode === 'light' ? 'white' : '#9193b0', color: props.mode === 'dark'? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleOnUppercase}>Convert To Upercase </button>
                <button className="btn btn-primary mx-1" onClick={handleOnLowercase}>Convert To Lowercase </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy </button>
                <button className="btn btn-primary mx-1" onClick={handleOnClear}>Clear </button>
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}  my-3`}>
                <h3>Your text Sumary </h3>
                <p>{text.length && (text.trim().split(/\s+/).length || 0)} words and {text.length} charectors</p>
                <p>{0.008 * text.split(" ").length } minutes to read</p>

                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
