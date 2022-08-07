import React from 'react';
import './Messenger.css';
import {UserContainer,Conversation} from '../../Components';
// import { useLocation } from 'react-router-dom';

function Messenger() {
  return (
    <div className='row border container-fluid'>
        <div className='col-4 border border-primary m-0 p-0'>
          <UserContainer />
        </div>
        <div className='col-8 border border-primary'>
          <Conversation />
        </div>
    </div>
  )
}

export default Messenger;