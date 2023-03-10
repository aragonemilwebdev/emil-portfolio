import Image from "next/image";
import React from "react";
import Link from "next/link";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import Router from "next/router"

const ContactSection = () => {
  const github = "https://github.com/aragonemilwebdev/"
  const linkedin = "https://www.linkedin.com/in/aragon-emil/"
  const upwork = "https://www.upwork.com/freelancers/~016cdd33babcc32bb1"

  const schema = yup.object({
    name:yup.string().required().max(80),
    phone:yup.string().required(),
    email:yup.string().required().email(),
    subject:yup.string().required().max(200),
    message:yup.string().required(),
  }).required()  

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

  const onSubmit = data => {
    fetch('/api/formdata', {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    })
    Router.push("/thankyou");
  }


  return ( 
    <>
      <div className=" w-full lg:h-screen">
        <div id="contact" className="max-w-[1240px] m-auto px-2 py-16 w-full pt-[90px]">
          <div className="flex">
            <p className=" text-xl tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
              Contact
            </p>
          </div>
          <h2 className=" text-[#42446E] py-4">Get in touch</h2>
          <div className=" grid lg:grid-cols-5 gap-8">
            {/*Left*/}
            <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className=" lg:p-4 h-full">
                <div>
                  <Image
                    className=" rounded-xl hover:scale ease-in duration-300 w-full"
                    src="/contact.jpg"
                    alt="/"
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                  <h2 className=" py-2">EMIL L. ARAGON</h2>
                  <p>Front-End Developer</p>
                  <p className=" py-4">
                    I am available for freelance work  or full time position. Contact
                    me and let&apos;s talk
                  </p>
                </div>
                <div>
                  <div className="flex flex-col mt-6">
                    <p className=" uppercase bg-clip-text font-bold flex">
                      Connect With Me
                    </p>
                  </div>
                  <div className=" flex justify-start gap-5 sm:gap-10 items-center w-full sm:w-[80%] mt-5">
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-[6px] sm:p-2 gradiant-bg text-white hover:scale-125">
                      <Link target="_blank" href={github}>
                        <FaGithub className=" w-5 h-5 lg:w-7 lg:h-7" />
                      </Link>
                    </div>
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-[6px] sm:p-2 gradiant-bg text-white hover:scale-125">
                      <Link target="_blank" href={linkedin}>
                        <FaLinkedin className=" w-5 h-5 lg:w-7 lg:h-7" />
                      </Link>
                    </div>
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-[6px] sm:p-2 gradiant-bg text-white hover:scale-125">
                      <Link href={upwork}>
                        <SiUpwork className=" w-5 h-5 lg:w-7 lg:h-7" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Right*/}
            <div className=" col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="p-4">
                <form onSubmit={handleSubmit(onSubmit)} action='/' method='post'>
                  <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className=" flex flex-col">
                      <label className=" uppercase text-sm py-2">Name</label>
                      <input
                        className=" border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                        type="text"
                        id="name"
                        name="name"
                        {...register('name')}
                      />
                      {errors.name?.message}
                    </div>
                    <div className=" flex flex-col">
                      <label className=" uppercase text-sm py-2">
                        Phone number
                      </label>
                      <input
                        className=" border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                        type="number"
                        id="phone"
                        name="phone"
                        {...register('phone')}
                      />
                      {errors.phone?.message}
                    </div>
                  </div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Email</label>
                    <input
                      className=" border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                      type="email"
                      id="email"
                      name="email"
                      {...register('email')}
                    />
                    {errors.email?.message}
                  </div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Subject</label>
                    <input
                      className=" border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                      type="text"
                      id="subject"
                      name="subject"
                      {...register('subject')}
                    />
                    {errors.subject?.message}
                  </div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Message</label>
                    <textarea
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      id="message"
                      rows="10"
                      name="message"
                      {...register('message')}
                    ></textarea>
                    {errors.message?.message}
                  </div>
                  <button type="submit" className=" shadow-xl shadow-gray-400 rounded-md uppercase bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-white w-full mt-4 py-3">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
