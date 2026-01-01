import React from 'react'
import '../styles/Tailwind.css'
function Signup() {
  return (
    <>
    <div class='h-120  flex justify-center items-center k'>
         <div class=' h-98     w-3xs  shadow-black shadow-inner'>
    <h1 class='text-center text-2xl font-bold' >Sign up</h1>
    <p class='text-xs text-center'>Signup to continue</p>
    <form action="" class='text-center'>
        <input type="text" name="" id="" placeholder='Name'  class='inpt'/><br/>
        <input type="email" name="" id="" placeholder='Email' class='inpt'/><br></br>
        <input type="text" name="" id="" placeholder='Contact' class='inpt'/><br></br>
        <input type="password" name="" id="" placeholder='Password' class='inpt'/><br></br>
        <input type="password" name="" id="" placeholder='Confirm Password' class='inpt'/><br></br>
        <button type='submit' class='bg-blue-600 text-white font-bold text-xs w-45 h-6'>Sign up</button>
        <p>Or</p>
        <p class='text-xs'>Do you have already an account?Login</p>
    </form>
   </div>
    </div>

 



  
    
    </>
  )
}

export default Signup