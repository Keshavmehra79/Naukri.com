import React, { useState } from 'react'
import '../styles/Tailwind.css'
import {useNavigate } from 'react-router-dom'
function Signup() {
           
                ///////////PArt2
                const [formData,setdata]=useState({});
                const handlechange=(e)=>{
                  let name=e.target.name;
                  let value=e.target.value;
                  setdata(values=>({...values,[name]:value}))
                }
                  let navigate=useNavigate();

                  const loginpress=()=>{
                    navigate('/loginpage')
                  }
 
  const handlesubmit=(e)=>{
    e.preventDefault();
    
    if(formData.name==""){
      alert("PLease Enter your full name....")
      return
    }
    else if(formData.email==""){
      alert("PLease Enter your Email....")
      return
    }
    else if(formData.contact==""){
      alert("PLease Enter your 10 digit contact....")
      return
    }
    else if(formData.password==""){
      alert("Please create password....")
      return
    }
    else if(!(formData.password.match(/[!@#$%^&*]/))){
      alert("Create Strong Password With use symbols(@#$%)....")
      return
    }
    else if(formData.confirmpassword==""){
      alert("PLease Confirm Your Password....")
      return
    }
    else if(formData.confirmpassword!=formData.password){
      alert("PLease Enter Correct  Password....")
      return
    }
    
    localStorage.setItem('signupdata',JSON.stringify(formData));
    if(formData.profession=='Jobseeker'){
      navigate('/jobseeker')
    }
    else if(formData.profession=='Admin'){
      navigate('/adminpage')
    }
    else if(formData.profession=='Recruiter'){
      navigate('/recruiter')
    }
  }
    
  
  return (
    <>
    <div className='h-120  flex justify-center items-center '>
         <div className=' h-98     w-3xs  shadow-black shadow-inner'>
    <h1 className='text-center text-2xl font-bold' >Sign up</h1>
    <p className='text-xs text-center'>Signup to continue</p>
    <form onSubmit={handlesubmit} className='text-center'>
              <h1>Choose your profession</h1>
          <select name="profession" className='inpt'   onChange={handlechange}>
            <option value="Admin">Admin</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Jobseeker">Jobseeker</option>
            
            </select> <br/>
        <input type="text" name="name"  placeholder='Name'  className='inpt' onChange={handlechange}/><br/>
        <input type="email" name="email"  placeholder='Email' className='inpt' onChange={handlechange}/><br></br>
        <input type="text" name="contact" placeholder='Contact' className='inpt' onChange={handlechange}/><br></br>
        <input type="password" name="password" placeholder='Password' className='inpt' onChange={handlechange}/><br></br>
        <input type="password" name="confirmpassword" placeholder='Confirm Password' className='inpt' onChange={handlechange}/><br></br>
        <button type='submit' className='bg-blue-600 text-white font-bold text-xs w-45 h-6' >Sign up</button>
        <p>Or</p>
        <p className='text-xs '>Do you have already an account?<button className="border hover:cursor-pointer" onClick={loginpress}>Login</button></p>
    </form>
   </div>
    </div>
    </>
  )
   }

export default Signup