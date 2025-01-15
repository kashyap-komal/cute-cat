'use client'
import React from 'react'
import * as motion from "motion/react-client"
import Image from "next/image";


const Cat = () => {
 
  return (
    <div className="flex place-items-center justify-center min-h-screen">
    <motion.div
    animate={{
       x:[0,300,0,-300],
    
    }}
    transition={{
      duration:4,
      repeat:Infinity,
      repeatType:"loop",
    }}
    >
      {/*Meow bubble*/}
      <div className='absolute-top-[-20px] left-[50%] transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-white text-black rounded-full shadow-md'>
        Meow
      </div>
     <Image src="/kitty.svg" alt="Cute Kitty" width={100} height={100} />
     </motion.div>
    </div>
  )
}

export default Cat
