import React, { useState } from 'react'
import { IoMdContact} from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
function Loginpage() {
  const[logindata,setdata]=useState({});

  const handlechange=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setdata(values=>({...values,[name]:val}))
        
  }

    const handlesubmit=(e)=>{
      e.preventDefault();
      let signupdata=JSON.parse(localStorage.getItem('signupdata'));      
      if(logindata.email!=signupdata.email){
          alert('Please enter correct email')
          return
      }     
      else{
        alert("working....")
      }
    }

  
  return (
      <>
    <div className='h-130 w-full flex justify-center items-center' >
        <div className='  h-80 w-65 shadow-black shadow-lg text-center  text-m px-20 '>
      <h1 className='text-center text-2xl font-bold  border '>Log in </h1>

      <form onSubmit={handlesubmit} className=' flex flex-col items-center justify-center' >
   <IoMdContact        className='h-8 w-6'/> < input type="text" placeholder='Enter your email' class='inpt'  name="email" onChange={handlechange}/>
   <RiLockPasswordFill className='h-8 w-6'/><input type="password" placeholder='Enter your password' class='inpt' name="password" onChange={handlechange}  />
   <input type="submit" value= 'Login' className= ' bg-blue-600 text-white font-bold text-xs w-45 h-8 ' id='loginbtn2'/>
   </form>

        </div>
    </div>
    </>
  )
}

export default Loginpage