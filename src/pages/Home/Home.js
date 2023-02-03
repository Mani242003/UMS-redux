import React,{useState,useEffect} from 'react'
import {v4 as uuid}from "uuid";
import {useDispatch} from "react-redux"

import "./Home.css"
import { addUser } from '../../slices/UserSlices';

const Home = () => {
  const dispatch=useDispatch()

  const [userInfo, setUserInfo] = useState(
    {
      id:"",
      name:"",
      email:"",
      age:"",
      phone:"",
    })
    
    useEffect(() => {

      setUserInfo((curentINFO)=>{ 
        return {
          ...curentINFO,
          id:uuid()
         
        }})
      
    }, [])


    const handelAdd=()=>{
      dispatch(addUser( userInfo))

      setUserInfo(
        {
      name:"",
      email:"",
      age:"",
      phone:"",
       })
    }

   const handelChange=(event)=>{

    const {name,value}=event.target;

      setUserInfo((currentInfo)=>{

      return({...currentInfo,[name]:value})

    })
   }

   console.log(userInfo);

  return (
    <div className='UserInformationDiv'>
    
    
   <h1 className='titel' >User information</h1>
   

   <input     value={userInfo.id}       type="text"         name="id"    onChange={handelChange} disabled/> 
 
    

    <input  placeholder='Enter User Name'    value={userInfo.name}       type="text"         name="name"    onChange={handelChange}/>
      
  

     <input  placeholder='Enter User email'    value={userInfo.email}       type="text"        name="email"   onChange={handelChange}/>
   
    


     <input placeholder='Enter User age'  value={userInfo.age}     type="number"        name="age" onChange={handelChange}/>
  
    


    <input  placeholder='Enter User Contact no'    value={userInfo.phone}       type="text"        name="phone"   onChange={handelChange}/>
  


    <button className='addButton' onClick={handelAdd} >Add User</button>
    </div>


      
  
  )
}

export default Home
