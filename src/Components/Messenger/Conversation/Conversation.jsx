import React from "react";
import "./Conversation.css";
//imported components;
import {ConversationHeaderCol1,ConversationHeaderCol2} from "../ConversationHeader/ConversationHeader";
import ShortMessages from "../ShortMessages/ShortMessages";
import MessageInput from "../MessageInput/MessageInput";
//end;

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Conversation() {
  return (
    <div className="con-container">
      <Row className="conversation-header">
        <Col sm={10}>
          <ConversationHeaderCol1 />
        </Col>
        <Col sm={2}>
          <ConversationHeaderCol2 />
        </Col>
      </Row>
      <Row className="conversation-body">
        <ShortMessages />
      </Row>
      <Row className="conversation-inputField">
        <MessageInput />
      </Row>
    </div>
  );
}

export default Conversation;
