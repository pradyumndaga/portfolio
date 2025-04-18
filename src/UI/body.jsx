import Typewriter from "typewriter-effect";
import { GithubIcon, Linkedin, Mail } from "lucide-react";
const Body = () => {
  return (
    <div className="flex flex-col items-between justify-between gap-2 p-2 text-white">
      <div className="p-2 rounded-lg text-white">
        <div className="flex flex-col flex-wrap">
          <div>
            <div className="flex flex-col flex-wrap p-2 gap-4">
              {/* <h1 className="text-4xl w-fit rounded-lg p-2 bg-gray-800 text-mint-500 font-sriracha">Pradyumn Daga</h1> */}
              <p className="ml-2 text-xl font-bold">
                {" "}
                Hi, I'm a Software Engineer from Pune, India. Building reliable tech solutions for 4+ years.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-around items-center mr-2 flex-1/3 border-2 rounded-lg text-gray-800 p-2 overflow-hidden">
            <img
              src="assets/angular.png"
              alt="angular"
              className="bg-gray-800 rounded-full h-20 w-20 p-1 shadow-xl"
            />
            <img
              src="assets/react.svg"
              alt="react"
              className="bg-gray-800 rounded-full h-20 w-20 p-1 shadow-xl"
            />
            <img
              src="assets/nodejs.png"
              alt="vue"
              className="bg-gray-800 rounded-full h-20 w-20 p-1 shadow-xl"
            />
            {/* <img
              src="assets/mongodb.png"
              alt="svelte"
              className="bg-gray-800 rounded-full h-20 w-20 p-1 shadow-xl"
            /> */}
            <img
              src="assets/vite.svg"
              alt="svelte"
              className="bg-gray-800 rounded-full h-20 w-20 p-1 shadow-xl"
            />
          </div>
          {/* <div className='flex flex-col gap-2 p-2'>
                    <img src="assets/avatar.png" alt="Pradyumn Daga" className="rounded-full h-40 w-40" />
                    <ul className='flex gap-2 p-2 justify-center items-center bg-gray-800 rounded-lg'>
                        <li className='border-1 p-2 rounded-full hover:text-mint-500 cursor-pointer'><GithubIcon /></li>
                        <li className='border-1 p-2 rounded-full hover:text-mint-500 cursor-pointer'><Linkedin /></li>
                        <li className='border-1 p-2 rounded-full hover:text-mint-500 cursor-pointer'><Mail /></li>
                    </ul>
                </div> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-4 gap-4 w-full justify-around items-center flex-wrap border-2 rounded-lg border-gray-800">
        <div className="flex md:w-1/3 item-1 flex-col justify-center items-center">
          <h1>My Services</h1>
          <div className="flex justify-end items-center text-4xl font-bold font-audiowide">
            <Typewriter
              options={{
                strings: [
                  "Web Apps",
                  "Mobile Apps",
                  "APIs",
                  "Devops",
                  "Databases",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 25,
              }}
            />
          </div>
        </div>
        <div className="flex item-3 flex-col items-center gap-2 p-2">
          <img
            src="assets/avatar.png"
            alt="Pradyumn Daga"
            className="rounded-full h-40 w-40"
          />
          <ul className="flex gap-2 p-2 justify-center items-center bg-gray-800 rounded-lg text-white shadow-xl">
            <li className="border-1 p-2 rounded-full hover:text-mint-500 cursor-pointer">
              <a href="https://github.com/pradyumndaga" target="_blank">
                <GithubIcon />
              </a>
            </li>
            <li className="border-1 p-2 rounded-full hover:text-mint-500 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/pradyumn-daga-7642a213a/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </li>
            <li className="border-1 p-2 rounded-full hover:text-mint-500 cursor-pointer">
              <a href="mailto:pradyumndaga28@gmail.com">
                <Mail />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex w-1/3 item-2 flex-col justify-center items-center">
          <h1>Talks about</h1>
          <div className="flex justify-end items-center text-4xl font-bold font-audiowide">
            <Typewriter
              options={{
                strings: [
                  "Angular",
                  "React",
                  "Typescript",
                  "Javascript",
                  "Node",
                  "Express",
                  "MongoDB",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 25,
              }}
            />
          </div>
        </div>
      </div>

      {/* <div className='flex mt-4'>
            <div className='flex mr-2 flex-1/3 border-2 rounded-lg text-white p-2'>
            <h2>Skills</h2>

            <img src="assets/angular.png" alt="angular" className='bg-gray-800 rounded-full h-20 w-20 p-1' />
            <img src="assets/react.svg" alt="angular" className='bg-gray-800 rounded-full h-20 w-20 p-1' />
            </div>
            <div className='flex ml-2 flex-2/3 flex-col'>
            <div className='flex border-2 rounded-lg text-white'>Projects</div>
            <div className='flex border-2 rounded-lg mt-4 text-white'>Reach out</div>
            </div>
        </div> */}
    </div>
  );
};

export default Body;
