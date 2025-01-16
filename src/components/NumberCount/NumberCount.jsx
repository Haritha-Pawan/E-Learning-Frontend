import React from 'react'
import CountUp from 'react-countup';

const NumberCount = () => {
  return (
    <div className='bg-[#0063ff] py-10 text-white'>
           <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div className="flex flex-col items-center  ">
                <p className='text-4xl font-semibold'>
                    <CountUp start={0} end={650} duration={3} enableScrollSpy={true}
                    scrollSpyOnce={true}/>
                </p>
                <p>Expert tutor</p>
            </div>

            <div className="flex flex-col items-center ">
                <p className='text-4xl font-semibold'><CountUp
                   start={20000}
                   separator=','
                   suffix="+"
                   duration={3}
                   enableScrollSpy={true}
                   scrollSpyOnce={true}
                /></p>
                <p>Hours content</p>
            </div>

            <div className="flex flex-col items-center ">
                <p className='text-4xl font-semibold'><CountUp
                end={170}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                /></p>
                <p>Subject and Courses</p>
            </div>

            <div className="flex flex-col items-center ">
                <p className='text-4xl font-semibold'><CountUp
                 start={0}
                 end={898}
                 duration={3}
                 enableScrollSpy={true}
                 scrollSpyOnce={true}
                
                /></p>
                <p>Active student</p>
            </div>

           
           </div>
    </div>
  )
}

export default NumberCount
