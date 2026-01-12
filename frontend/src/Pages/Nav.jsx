import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import pic1 from '../assets/logo.png'

const Nav=()=> {
  const navigate=useNavigate();
  const nav=()=>{
    const signupdata=localStorage.getItem('signupdata');
    if(!signupdata){
      alert('Please create an account first')
      navigate('/signup')
    }
  }

  return (
    <nav>
        <section id='nav'>
            <div ><Link to="/"><img src={pic1} alt="" id='logoimg'/></Link></div>
            <ul id='navul'>
                <li className='lioful'><Link to="/jobs">Jobs</Link></li>
                <li className='lioful'><Link to="/compnies">Compnies</Link></li>
                <li className='lioful'><Link to="/service">Service</Link></li>
                <li id='loginbtn'onClick={nav}>Register</li>
            </ul>
        </section>

        

    </nav>
  )
}

export default Nav