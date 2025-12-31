import React from 'react'
import {Link} from 'react-router-dom';
import pic1 from '../assets/logo.png'

const Nav=()=> {
  return (
    <nav>
        <section id='nav'>
            <div ><Link to="/"><img src={pic1} alt="" id='logoimg'/></Link></div>
            <ul id='navul'>
                <li className='lioful'><Link to="/jobs">Jobs</Link></li>
                <li className='lioful'><Link to="/compnies">Compnies</Link></li>
                <li className='lioful'><Link to="/service">Service</Link></li>
                <li id='loginbtn'><Link to="/signup">Register</Link></li>
            </ul>
        </section>
    </nav>
  )
}

export default Nav