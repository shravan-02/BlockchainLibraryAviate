import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";
import footer from "../assets/footerBg.svg"
const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
        <img src={footer} alt="footer" className="h-full"/>
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2 text-center">Solutions</h6>
          <ul className="text-center">
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 text-center">Solutions</h6>
          <ul className="text-center">
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 text-center">Solutions</h6>
          <ul className="text-center">
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 text-center">Solutions</h6>
          <ul className="text-center">
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
            <li className="py-1">marketing</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase text-center">Subscribe to our newsletter</p>
          <p className="py-4 text-center">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row">
            <input className="w-full p-2 rounded-md mb-4" type="email" placeholder="Type your email here"/>
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px]  px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500">
          <p>2022, Shravan Suresh</p>
          <div className="flex justify-between sm:w-[300px] py-2 text-2xl">
              <FaInstagram />
              <FaTwitter />
              <FaFacebook />
              <FaGithub />
              <FaTwitch />
              </div>
      </div>
    </div>
  );
};

export default Footer;
