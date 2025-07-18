import React from 'react'
import { slideLeft } from '../../animate';
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";




const whyChooseData =[    
    
    {
        id: 1,
        title: "One-on-one Teaching",
        desc: "All of our special education experts have a degree in special education.",
        icon: <GrYoga />,
        bgColor: "#0063ff",
        delay: 0.3,
      },
      {
        id: 2,
        title: "24/7 Tutor Availability",
        desc: "Our tutors are always available to respond as quick as possible for you",
        link: "/",
        icon: <FaDumbbell />,
        bgColor: "#73bc00",
        delay: 0.6,
      },
      {
        id: 3,
        title: "Interactive Whiteboard",
        desc: "Our digital whiteboard equipped with audio and video chat fetures.",
        link: "/",
        icon: <GiGymBag />,
        bgColor: "#fa6400",
        delay: 0.9,
      },
      {
        id: 4,
        title: "Affordable Prices",
        desc: "Choose an expert tutor based on your budget and per hour.",
        link: "/",
        icon: <GiGymBag />,
        bgColor: "#fe6baa",
        delay: 0.9,
      },

];



const whyChoose = () => {
  return (
    <div className='bg-[#f9fafc]'>
        <div className="container py-24">
            {/* header */}
            <div className='text-center space-y-4 p-6 mx-auto mb-5 max-w-[500px]'>
                <h1 className='uppercase text-2xl text-orange-500'>Why Choose Us</h1>
                <p className='font-semibold text-3xl'>Benifits Of online tutoring services with us</p>
            </div>
             {/* card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    whyChooseData.map((item)=>
                    {
                        return(
                            <motion.div 
                            variants={slideLeft(item.delay)}
                            initial="hidden"
                            whileInView={"visible"}


                            className='space-y-4 p-6 rounded-xl
                            shadow -[0_0_22px_rgba(0,0,0,0,0.15)] '>
                                <div
                                style={{backgroundColor:item.bgColor}}
                               className='w-10 h-10 rounded-lg flex justify-center 
                               items-center  text-white text-2xl' >
                                {item.icon}
                                </div>
                                <p className='font-semibold'>{item.title}</p>
                                <p className='text-sm text-gray-500'>{item.desc}</p>

                            </motion.div>

                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default whyChoose




