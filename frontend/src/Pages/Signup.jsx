import React, { useState } from 'react'
import '../styles/Tailwind.css'
function Signup() {
  const [formData,setdata]=useState({});
  const handlechange=(e)=>{
    let name=e.target.name;
      let value=e.target.value;
      setdata(values=>({...values,[name]:value}))
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    formData.setItem('UserData',formData);
  }
  return (
    <>
    <div className='h-120  flex justify-center items-center k'>
         <div className=' h-98     w-3xs  shadow-black shadow-inner'>
    <h1 className='text-center text-2xl font-bold' >Sign up</h1>
    <p className='text-xs text-center'>Signup to continue</p>
    <form action="" className='text-center'>
        <input type="text" name="name"  placeholder='Name'  className='inpt' onChange={handlechange}/><br/>
        <input type="email" name="email"  placeholder='Email' className='inpt' onChange={handlechange}/><br></br>
        <input type="text" name="contact" placeholder='Contact' className='inpt' onChange={handlechange}/><br></br>
        <input type="password" name="password" placeholder='Password' className='inpt' onChange={handlechange}/><br></br>
        <input type="password" name="confirmpassword" placeholder='Confirm Password' className='inpt' onChange={handlechange}/><br></br>
        <button type='submit' className='bg-blue-600 text-white font-bold text-xs w-45 h-6' >Sign up</button>
        <p>Or</p>
        <p className='text-xs'>Do you have already an account?Login</p>
    </form>
   </div>
    </div>

 



  
    
    </>
  )
}

export default Signup