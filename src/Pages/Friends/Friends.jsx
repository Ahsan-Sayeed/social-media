import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
function Friends() {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.post('http://localhost:4000/findfriends',{
            tk: Cookies.get('tk')
          })
        .then((response)=>{
            setUsers(response.data);
        })
        .catch(err=>console.log(err));
    },[]);

    const handleAddFriend = (value)=>{
      axios.post('http://localhost:4000/friendlist',{
        id:value
      })
      .then((response)=>{
        console.log(response)
      })
      .catch(err=>console.log(err));
      // console.log(value);
    }

  return (
    <div>
        Find Friends
        {users.map((value,index)=>{
            return (
            <div key={index}>
                <p className='border'>{value.FullName} <button onClick={()=>handleAddFriend(value._id)}>+</button></p>
            </div>)
        })}
    </div>
  )
}

export default Friends;