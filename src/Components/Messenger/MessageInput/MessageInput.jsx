import React, { useEffect, useState } from "react";
import './MessageInput.css';
import fakeApi from '../../../FakeJson/UsersJson.json';

// bootstrap
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// material ui
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";

function MessageInput() {
  const [inputText,setInputText] = useState();
  const [sendToApi,setSendToApi] = useState(fakeApi[0].Messages);
  
  const handleInput = (e) =>{
    setInputText(e.target.value);
  }

  const sendMessage = ()=>{
    setSendToApi([...sendToApi,{author:'You',text:inputText}])
  }

  useEffect(()=>{
    console.log(sendToApi);
  },[sendToApi])


  return (
    <InputGroup size="sm" className="input-field">
      <InputGroup.Text
        id="inputGroup-sizing-sm"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <button className="con-icon-btn">
          <SentimentSatisfiedAltIcon />
        </button>
        <button className="con-icon-btn">
          <AttachmentIcon />
        </button>
      </InputGroup.Text>
      <Form.Control
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="Type a message..."
        className="type-message"
        onChange={handleInput}
      />
      <InputGroup.Text
        id="inputGroup-sizing-sm"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <button className="con-icon-btn" onClick={sendMessage}>
          <SendIcon />
        </button>
      </InputGroup.Text>
    </InputGroup>
  );
}

export default MessageInput;
