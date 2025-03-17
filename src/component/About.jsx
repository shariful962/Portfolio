import React from "react";
import aboutImg from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="contianer md:container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
            src={aboutImg}
            alt="profile picture"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML and CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                         3+
                    </h3>
                    <p>Years Experiences</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                         50+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                         10+
                    </h3>
                    <p>Happy Clients</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
