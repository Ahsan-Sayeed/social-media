import React, { useState } from 'react';
import './UserContainer.css';
import Users from '../Users/Users';
import fakeApi from '../../../FakeJson/UsersJson.json';
import AccordionProfile from '../Accordion/Accordion';
import SearchBox from '../SearchBox/SearchBox';

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//material ui
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';


function UserContainer() {
  return (
    <div className='user-container'>
      <div className='myProfile m-2'>
        {<AccordionProfile/>}
        {<SearchBox/>}
      </div>
      <div className='chat-list'>
         {fakeApi.map((value,index)=>
                  <Users userName={value.userName} key={index} activeStatus={value.ActiveStatus} ArrIndex={index}/>
         )} 
      </div>
      <Row className='footer-rows'>
        <Col className='d-flex justify-content-center align-items-center footer-button'>
           <Button variant="" className='border-0 d-flex justify-content-center align-items-center border text-white'>
              <PersonAddIcon style={{fontSize:'16px'}}/> 
              <span className='ms-2' style={{fontSize:'14px'}}> Add contact</span>
           </Button>
        </Col>
        <Col className='d-flex justify-content-center align-items-center footer-button'>
           <Button variant="" className='border-0 d-flex justify-content-center align-items-center border text-white'>
              <SettingsIcon style={{fontSize:'16px'}}/> 
              <span className='ms-1' style={{fontSize:'14px'}}>Settings</span>
           </Button>
        </Col>
      </Row>
    </div>
  )
}





export default UserContainer;