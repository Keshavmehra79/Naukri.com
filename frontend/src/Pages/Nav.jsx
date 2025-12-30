import React from 'react'
import {Link} from 'react-router-dom';

const Nav=()=> {
  return (
    <nav>
        <section>
            <div><Link to="/">Logo--Homepage</Link></div>
            <ul>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/compnies">Compnies</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </section>
    </nav>
  )
}

export default Nav