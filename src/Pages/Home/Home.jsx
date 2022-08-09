import React from 'react';
import './Home.css';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Friends from '../Friends/Friends';

function Home() {
  const [Name,setName] = useState('');
  
  useEffect(()=>{
    axios.post('http://localhost:4000/profile', {
      tk: Cookies.get('tk')
    })
    .then(function (response) {
      setName(response.data[0].FullName);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);

  return (
    <div>Welcome home <b>{Name}</b><br />
      <form action="/messenger">{/*Routing required*/}
          <button type="submit">Messenger</button>
      </form>
      <form action="/friends">{/*Routing required*/}
          <button type="submit">Friend List</button>
      </form>
      <form onSubmit={()=>Cookies.remove('tk')}>
        <button type='submit'>log out</button>
      </form>
      <div><Friends/></div>
    </div>
  )
}

export default Home;