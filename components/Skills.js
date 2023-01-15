import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <div className=" w-full lg:h-screen p-2">
        <div id="skills" className=' max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-[90px]'>
            <div className="flex">
                <p className=" text-xl tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
                Skills
                </p>
            </div>
          <h2 className=" text-[#42446E] py-4">What I Can Do</h2>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8">

            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border">
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                    <div className=" m-auto">
                        <Image src="/html.png" alt="/" width={64} height={64} />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>

            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border">
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                    <div className=" m-auto">
                        <Image src="/css.png" alt="/" width={64} height={64} />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>

            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border">
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                    <div className=" m-auto">
                        <Image src="/javascript.png" alt="/" width={64} height={64} />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h3>javaScript</h3>
                    </div>
                </div>
            </div>

            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border">
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                    <div className=" m-auto">
                        <Image src="/wordpress.png" alt="/" width={64} height={64} />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h3>Wordpress</h3>
                    </div>
                </div>
            </div>

            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border">
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                    <div className=" m-auto">
                        <Image src="/react.png" alt="/" width={64} height={64} />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h3>React.js</h3>
                    </div>
                </div>
            </div>

            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border">
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                    <div className=" m-auto">
                        <Image src="/nextjs.png" alt="/" width={64} height={64} />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h3>Next.js</h3>
                    </div>
                </div>
            </div>
            
            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border">
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                    <div className=" m-auto">
                        <Image src="/node.png" alt="/" width={64} height={64} />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h3>Node.js</h3>
                    </div>
                </div>
            </div>

            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border">
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                    <div className=" m-auto">
                        <Image src="/tailwind.png" alt="/" width={64} height={64} />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h3>Tailwind.css</h3>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
