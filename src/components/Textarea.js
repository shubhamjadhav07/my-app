import React, {useState} from 'react'



export default function Textarea(props) {
    const [text, setText] = useState('enter text here');
    const handleUpclick=()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleonchange=(event)=>{
        setText(event.target.value)
    }



  return (
    <div>
        <h1>ENTER THE TEXT BELOW TO ANALYZE</h1>
        <div class="mb-3">
            <label for="MyBox" className="form-label">{props.textr}</label>
            <textarea className="form-control" id="MyBox" rows="10" onChange={handleonchange} value={text}></textarea>
            <button type="button" className="btn btn-primary" onClick={handleUpclick}>Convert to uppercase</button>
        </div>
    </div>
  )
}
