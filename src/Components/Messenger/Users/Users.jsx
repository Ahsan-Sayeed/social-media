import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Users.css";
import image from "../../../Assets/Images/img1.jpg";

// material ui
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function Users({ userName, activeStatus, ArrIndex}) {
  const navigate = useNavigate();
  const [selected,setSelected] = useState(0);

  const handleClick = (e)=>{
      navigate('/messenger',{state:{index:e}});
      setSelected(e);
    }

  return (
    <div>
    <input type="radio" name="radio" id={ArrIndex} className="radio"/>
    <label for={ArrIndex} className="d-block background">
    <Row className='text-white p-2'  onClick={()=>handleClick(ArrIndex)}>
      <Col
        sm={2}
        className=" col-2 d-flex justify-content-center align-items-center"
      >
        <Button
          variant="outline-primary border-0 image-button"
          className="rounded-circle p-0 m-0"
        >
          <img src={image} className="img-fluid rounded-circle circle-image" />
          <span className={activeStatus?"active-status":"inactive-status"}></span>
        </Button>
      </Col>
      <Col sm={10} className="">
        <Row className="row ">
          <Col sm={10} className="">
            <p className="m-0 name-span text-start">{userName}</p>
          </Col>
          <Col
            sm={2}
            className=" d-flex justify-content-center align-items-center"
          >
            <span className="time-span">yesterday</span>
          </Col>
        </Row>
        <Row className="message-span d-flex align-items-center ">
          <Col sm={10} className="">
            <span className="d-flex align-items-center">
              {<DoneIcon style={{ fontSize: "12px" }} />}
              message
            </span>
          </Col>
          <Col
            sm={2}
            className="col-2 d-flex justify-content-center align-items-center"
          >
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                size="sm"
                className="border-0 dropdown-toggle"
                id="dropdown-basic"
              >
                {<ExpandMoreIcon className="expand-icon" />}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
    </label>
    </div>
  );
}

export default Users;
