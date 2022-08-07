import React, { useEffect, useState } from 'react';
import {Route,Routes, useLocation} from 'react-router-dom';
import {Home,Messenger} from '../Pages';
import Auth from '../Auth/Auth';
import Protected from './Protected';
import Cookies from 'js-cookie'


function UserRouter() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [isMessengerLoggedIn,setMessengerLogin] = useState(true);

  useEffect(()=>{
    if(Cookies.get('tk')){
      setIsLoggedIn(true);
      setMessengerLogin(true);
    }else{
      setIsLoggedIn(false);
      setMessengerLogin(false);
    }
  },[]);

  return (
    <Routes>
      {/* <Route path='/' element={<Protected isLoggedIn={isLoggedIn}><Home/></Protected>}/>
      <Route path='/admin' element={<Auth setIsLoggedIn={setIsLoggedIn}/>}/> */}
      <Route path="/" element={isLoggedIn?<Home/>:<Auth setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/messenger' element={<Protected isLoggedIn={isMessengerLoggedIn}><Messenger/></Protected>}/>
    </Routes>
  )
}

export default UserRouter;