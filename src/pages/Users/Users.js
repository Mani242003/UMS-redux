import React from 'react'
import User from "./User";
import { Link } from 'react-router-dom';
import "./Users.css";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../slices/UserSlices';

const Users = () => {

  // const {users, deleteUser} = useContext(GlobalContext)
  
 const users=useSelector( (state)=>state.userInfo.users)
 const dispatch=useDispatch()
 const deleteUser=(id)=>{
  dispatch(removeUser(id))
 }
  console.log(users);

  return (
   
    <div className='UsersContainer' >    
    {
      users.length===0?
     ( <div>
        <h1>No User Found</h1>
        <Link to="/"> add user</Link>

        </div>
     
     )
      :
     users.map((user)=>{
        return(
            <User 
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            age={user.age}
            phone={user.phone}
            deleteUser={()=>{ deleteUser(user.id)}}

             />
        
        )
      })
      }

    </div>
  )
}

export default Users
