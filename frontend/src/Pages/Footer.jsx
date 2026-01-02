import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
function Footer() {
  return (
         <>
    <footer className=' flex h-60 bg-gray-800 '>
        <div className='h-60 w-40    '>
            <h1 className='text-xl font-500 text-white '>Follow us</h1>
            <div className='flex text-gray-400 '>
            <FaFacebook className='h-6 w-10' />
            <p> Facebook</p>
            </div>
            <div className='flex text-gray-400'>
            <FaLinkedinIn className='h-6 w-10' />
            <p> Linkedin</p>
            </div>
            <div className='flex text-gray-400'>
            < FaInstagram className='h-6 w-10' />
            <p> Instagram</p>
            </div>
            <div className='flex text-gray-400'>
            <SiGithub className='h-6 w-10' />
            <p> Github</p>
            </div>

            <div> 
                <h1 className='text-xl font-500 text-white '>Still Help?</h1>
                <p className='text-l text-gray-400'>send your query</p>
                <input type="text" placeholder='Enter message' className='bg-amber-50'  />
                <button className='text-white border-2 rounded-xl '>Send message</button>
           </div>
 
            
        </div>
    </footer>
    
    
    
    </>
  )
}

export default Footer