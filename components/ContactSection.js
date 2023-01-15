import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
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
                    I am available for freelancer or full time position. Contact
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
                      <Link href="#">
                        <FaGithub className=" w-5 h-5 lg:w-7 lg:h-7" />
                      </Link>
                    </div>
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-[6px] sm:p-2 gradiant-bg text-white hover:scale-125">
                      <Link href="#">
                        <FaFacebook className=" w-5 h-5 lg:w-7 lg:h-7" />
                      </Link>
                    </div>
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-[6px] sm:p-2 gradiant-bg text-white hover:scale-125">
                      <Link href="#">
                        <FaLinkedin className=" w-5 h-5 lg:w-7 lg:h-7" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Right*/}
            <div className=" col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="p-4">
                <form>
                  <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className=" flex flex-col">
                      <label className=" uppercase text-sm py-2">Name</label>
                      <input
                        className=" border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                        type="text"
                      />
                    </div>
                    <div className=" flex flex-col">
                      <label className=" uppercase text-sm py-2">
                        Phone number
                      </label>
                      <input
                        className=" border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Email</label>
                    <input
                      className=" border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                      type="email"
                    />
                  </div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Subject</label>
                    <input
                      className=" border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Message</label>
                    <textarea
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      rows="10"
                    ></textarea>
                  </div>
                  <button className=" w-full mt-4">Send Message</button>
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
