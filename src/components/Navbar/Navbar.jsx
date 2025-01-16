import React from 'react'
import { MdComputer, MdMenu } from "react-icons/md";
import { NavbarMenu } from "../../data.js";
import Sidemenu from '../SideMenu/Sidemenu.jsx';
import { motion } from 'framer-motion';


const Navbar = () => {
    const[isOpen, setIsopen] = React.useState(false);
  return (
 <>
 <motion.div
  
 >
     <div className='container flex  justify-between py-6 items-center '>
        {/* logo section */}
        <div className='text-2xl  flex items-center gap-5 font-bold'>
            <MdComputer className='text-3xl text-[#0063ff]'/>
            <p>E-Tutor  </p>
        </div>
        {/* Menu section */}
        <div className='hidden lg:block ml-auto' > 
        <ul className='flex items-center gap-8'>
            {
                    NavbarMenu.map((item) =>
                {
                    return(
                                  <li key={item.id}>
                                    <a href={item.link} className='inline-block
                                    text-gray-600 text-sm xl:text-base py- px-2
                                    xl:px-3 hover:text-[#0063ff] transition-all duration-300 
                                    font-semibold'
                                    
                                    >{item.title}</a>
                                  </li>
                    );
                })
                }
            </ul>
        </div>
        {/* Button section */}
        <div className='hidden lg:block space-x-10'>
            <button className=' rounded-full px-6 py-2 font-semibold ml-18' >Sign In</button>
            <button className='bg-[#0063ff] rounded-full px-6 py-2 font-semibold'>Register</button>
        
        </div>
        {/* hamburger section */}
        <div className='lg:hidden' onClick={() => setIsopen(!isOpen)}>
            <MdMenu className='text-4xl'/>
               
        </div>
           
     </div>
    
 </motion.div>
 <Sidemenu isOpen={isOpen}/>
 </>
  )
}

export default Navbar
