import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
function Footer() {
  return (
         <>
    <footer  className=' w-full  flex justify-evenly items-center   h-60  bg-gray-800 '>
        <div className='h-50 w-40   '>
            <h1 className='text-xl font-500 text-white ml-10'>Follow us</h1>
            <div className='flex text-gray-400  '>
            <FaFacebook className='h-6 w-8' />
            <p> Facebook</p>
            </div>
            <div className='flex text-gray-400'>
            <FaLinkedinIn className='h-6 w-8' />
            <p> Linkedin</p>
            </div>
            <div className='flex text-gray-400'>
            < FaInstagram className='h-6 w-8' />
            <p> Instagram</p>
            </div>
            <div className='flex text-gray-400'>
            <SiGithub className='h-6 w-8' />
            <p> Github</p>
            </div>
                    </div>

            <div > 
                <h1 className='text-xl font-500 text-white '>Still Help?</h1>
                <p className='text-l text-gray-400'>send your query</p>
                <input type="text" placeholder='Enter message' className='bg-amber-50 '  />
                <button className='text-white border-2 rounded-xl '>Send message</button>
           </div>

           <div>
            <h1 className='text-xl font-500 text-white mb-1'>Contact us</h1>
            <p className='text-l text-gray-400'>Add.New Ashoka graden ,<br></br>Semra road Bhopal(462023)<br></br>
            Email:mehrakeshav332@gmail.com<br></br>Contact:7909322992</p>
           </div>

            
    </footer>
    
    
    
    </>
  )
}

export default Footer