import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
        <div className=' pt-28 w-full h-full xl:h-screen text-center sm:text-left'>
            <div className=' max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col sm:flex-row justify-between items-center'>
                <div>
                    <p className='text-3xl font-bold  md:text-4xl lg:text-6xl text-[#42446E]'>Hi 👋,
                    <br />
                    My name is</p>
                    <h1>EMIL L. ARAGON</h1>
                    <p className='text-3xl font-bold  md:text-4xl lg:text-6xl text-[#42446E]'>I build things for web</p>
                    <button className=' w-full sm:w-[250px] mt-10 py-3'>Download my CV</button>
                </div>
                <div  className=' w-[200px] lg:w-[350px] h-full items-center sm:flex mt-10 sm:mt-0'>
                    <Image
                        src='/emil-pic.png'
                        alt='/'
                        width={350}
                        height={350}
                        className=" border-[2px] rounded-full shadow-lg shadow-gray-400 border-gray"
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection