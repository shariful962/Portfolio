import React from "react";
import { FaFacebook,FaTwitter,FaLinkedin,FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container md:container mx-auto">
        <div className="flex flex-col md:flex-row items-center space-x-12 mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sharif</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in the USA, specializing in web and
              software development
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter your mail"
              />
              <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500  text-white px-4 py-2 rounded-r-lg">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Sharif. All Right Reserves.
            </p>
            <div className="flex space-x-4 my-4 md:my-0">
                <a className="text-gray-400 hover:text-white" text-2xl href=""><FaFacebook /></a>
                <a className="text-gray-400 hover:text-white" href=""><FaTwitter /></a>
                <a className="text-gray-400 hover:text-white" href=""><FaLinkedin /></a>
                <a className="text-gray-400 hover:text-white" href=""><FaGithub /></a>
            </div>
            <div className="flex space-x-4">
                <a className="text-gray-400 hover:text-white" href="">Privacy</a>
                <a className="text-gray-400 hover:text-white" href="">Terms of Services</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
