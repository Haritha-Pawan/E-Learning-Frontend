import React from 'react'
import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import {motion} from "framer-motion"
import { slideRigtht } from '../../animate';

const Hero = () => {
  return (
    <>
         <div className='container grid grid-col-1 
         md:grid-cols-2 min-h-[500px] relative'>
            <div className='text-center flex flex-col justify-center
                py-14 md:pr-16 xl:pr-40 md:py-0'>
                <div className='text-center md:text-left space-y-6'>
                   <motion.p
                     variants={slideRigtht(0.6)}
                     initial="hidden"
                     animate="visible"
                   className='text-orange-600 uppercase font-semibold '>
                    100% Satisfaction Gurantee
                    </motion.p>

                    <motion.h1 className='text-5xl font-semibold lg:text-6xl !leading-tight '
                    variants={slideRigtht(0.6)}
                    initial="hidden"
                    animate="visible"
                    
                    >
                        FindYour Perfect<span className='text-[#ffcf3a]'>Tutor</span> 
                        </motion.h1>
                    <motion.p
                    variants={slideRigtht(0.6)}
                    initial="hidden"
                    animate="visible">
                        We help you find perfect tutorfor 1-on-1 lessons.
                    </motion.p>


                    <motion.div
                    variants={slideRigtht(1.0)}
                    initial="hidden"
                    animate="visible"
                    
                    className='flex gap-8 justify-center md:justify-start !mt-8 items-center'>
                    <button className='bg-[#ffcf3a] font-semibold
                     px-6 py-3 rounded-full hover:!scale-110 hover:!shadow-xl 
                     duration-300'>Get Satarted</button>

                    <button className='flex justify-end items-center gap-2 font-semibold'>
                        <span className=''>
                    <FaPlay className='text-[#0063ff]'/>

                        </span>See how it work</button>
                    </motion.div>

                  

                </div>
            </div>
            <div className='flex justify-center items-center'>
                <motion.img
                initial = {{opacity:0,x:200}}
                animate = {{opacity:1,x:0}}
                transition={{type:"spring",stiffness:100,delay:0.6}}
                src={HeroImg} className='md:w-[500px]  xl:w-[700px]'
                 />
            </div>
         </div>
      
    </>
  )
}

export default Hero
