import React from "react";
import {useLocation} from "react-router-dom";
import "./ConversationHeader.css";
import image from "../../../Assets/Images/img1.jpg";
import fakeApi from '../../../FakeJson/UsersJson.json';

//material ui
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";

function ConversationHeaderCol1() {
  const location = useLocation();
  const index = location.state===null?0:location.state.index;

  return (
    <div className="d-flex justify-content-start align-items-center">
      <div className="my-3 ms-2 ">
        <img src={image} className="img-fluid con-img" alt="" />
      </div>
      <div className="ms-3 ">
        <div>
          <h4 className="con-user-name text-white">{fakeApi[index].userName}</h4>
        </div>
        <div>
          <span className="con-active-time text-white">
          {fakeApi[index].lastSeen}
          </span>
        </div>
      </div>
    </div>
  );
}

function ConversationHeaderCol2() {
  return (
    <div className="d-flex justify-content-end align-items-center text-white h-100">
      <div>
        <VideoCallIcon style={{ fontSize: "25px", marginRight: "18px" }} />
        <CallIcon style={{ fontSize: "20px", marginRight: "15px" }} />
        <MoreVertIcon style={{ fontSize: "25px", marginRight: "15px" }} />
      </div>
    </div>
  );
}

export { ConversationHeaderCol1, ConversationHeaderCol2 };
