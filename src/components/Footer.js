import React from "react";
import FB from '../images/icons/facebook-app-symbol.png'
import TW from '../images/icons/twitter.png'

function Footer() {
  return (
    <>
      <div className="hidden text-white pl-32 md:flex justify-between mt-28 bg-slate-950 ">
        <div>
          <h1 className="font-bold mb-8 text-lg cursor-pointer">Company</h1>
          <ul className="opacity-55">
            <li className="mb-3 cursor-pointer">About Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-8 text-lg cursor-pointer">View Website in</h1>
          <ul>
            <li className="opacity-55 cursor-pointer">English</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-8 text-lg cursor-pointer">Need Help?</h1>
          <ul className="opacity-55">
            <li className="mb-3">Visit Help Center</li>
            <li>Share Feedback</li>
          </ul>
        </div>
        <div >
          <h1 className="font-bold mb-8 text-lg cursor-pointer ">Connect With Us</h1>
          <ul className="flex flex-row">
            <li className="mb-3 cursor-pointer  mr-2 w-6"><img src={FB} alt="fb"/></li>
            <li className="mb-3 cursor-pointer  mr-2 w-6"><img src={TW} alt="fb"/></li>
          </ul>
        </div>
      </div>
      <div  className="hidden text-white pl-32 md:flex justify-between mt-8 pb-12  ">
        <div className="w-60 opacity-55" >
          <p>
            0 2023 STAR. All Rights Reserved. Terms Of Use Privacy Policy FAQ
          </p>
        </div>
        <div className="flex">
            <img className="w-36 h-12 mr-4 cursor-pointer" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="download" />
            <img className="w-36 h-12 mr-16 cursor-pointer" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="download" />
        </div>
      </div>
    </>
  );
}

export default Footer;
