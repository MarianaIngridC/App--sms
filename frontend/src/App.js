import React, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState({
    recipient:'',
    textmessage:''     
  })



  const sendText = () => {
    const text_ = text;

    fetch(`http://localhost:2000/send-text?recipient=${text_.recipient}&textmessage=${text_.textmessage}`)
    .catch(err => console.log(err))
  }


  return (
    <div className="App">
      
      <div style={{ marginTop:10 }}>
        <h2> Send text message </h2>
        <label> Your phone Number </label>
        <br />
        <input
        value={text.recipient}
        onChange={e => setText({...text, recipient:e.target.value})}
        />
        <div style={{margin:8}}/>
        <label> Message </label>
        <br />
        <textarea
        rows={3}
        value={text.textmessage}
        onChange={e => setText({...text, textmessage: e.target.value})}/>
        <div style={{margin:8}}/>
        <button
        onClick={sendText}
        >
          Send Text
        </button>
      </div>
    </div>
  );
}

export default App;
