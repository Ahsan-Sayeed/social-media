import React, { useEffect } from "react";
import {useLocation} from "react-router-dom";
import "./ShortMessages.css";
import image from "../../../Assets/Images/img1.jpg";
import fakeApi from "../../../FakeJson/UsersJson.json";

// bootstrap
import Container from "react-bootstrap/Container";

function ShortMessages() {
  const location = useLocation();

  const messageArr = fakeApi[location.state===null?0:location.state.index].Messages;
  const bool = messageArr.map((value) => value.author.includes("You"));


  return (
    <Container fluid>
      {bool.map((value,index) => {
          if (value) {
            return (
              <div className="d-flex my-2 align-items-start flex-row-reverse" key={index}>
                <img
                  src={image}
                  className="img-fluid short-image rounded-circle"
                  alt=""
                />
                <p className="mx-2 short-text2">
                  {messageArr[index].text}
                </p>
              </div>
            );
          } else {
            return (
              <div className="d-flex my-2 align-items-start" key={index}>
                <img
                  src={image}
                  className="img-fluid short-image rounded-circle"
                  alt=""
                />
                <p className="mx-2 short-text">
                  {messageArr[index].text}
                </p>
              </div>
            );
          }
      })}
    </Container>
  );
}

export default ShortMessages;
