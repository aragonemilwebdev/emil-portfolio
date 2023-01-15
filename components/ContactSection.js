import React from 'react'

const ContactSection = () => {
  return (
    <>
        <div className=' w-full lg:h-screen'>
            <div id='contact' className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <div className='flex'>
                <p className=' text-xl tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]'>Contact</p>
                </div>
                <h2 className=' text-[#42446E]'>Get in touch</h2>
                <div className=' grid lg:grid-col-5 gap-8'>
{/*Left*/}
<div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl'>

</div>
{/*Right*/}
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactSection