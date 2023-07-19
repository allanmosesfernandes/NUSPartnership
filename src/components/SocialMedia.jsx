import React from "react";
import snapchat from "../assets/images/socials/snapchat.svg";
import facebook from "../assets/images/socials/facebook.svg";
import instagram from "../assets/images/socials/instagram-icon.svg";
import tiktok from "../assets/images/socials/tiktok-icon.svg";
import twitter from "../assets/images/socials/twitter.svg";
import youtube from "../assets/images/socials/youtube-icon.svg";
import linkedin from "../assets/images/socials/linkedin-icon.svg";
import arrow from "../assets/images/socials/arrow.svg";
import NTSU from "../assets/images/socials/NTSU-col.png";
import Uon from "../assets/images/socials/UoN-col.png";

function SocialMedia() {
  return (
    <div className="flex flex-col font-body pt-20">
      <h1 className="text-center text-oceanBlue text-5xl font-bold font-body sm:text-5xl">
        Follow us on Socials
      </h1>
      {/* Socials Grid */}
      <div className="flex flex-col mb-4">
        {/* Social Block */}
        {/* NTSU */}
        <div className="flex flex-col lg:flex-row justify-between mx-auto mt-12 w-[90%] lg:w-[80%] border-b-2 border-gray-300 pb-4">
          <h3 className="text-4xl text-oceanBlue font-semibold mb-6 flex gap-4 mx-auto my-2 lg:mx-0">
            <img src={NTSU} alt="NTSU logo" className="w-[200px]" />
          </h3>
          <div className="flex flex-row gap-4 pb-6 items-center">
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://facebook.com/trentstudents"
              target="_blank"
              rel="noreferrer"
              title="NTSU Facebook"
            >
              <img
                src={facebook}
                alt="facebook"
                className="w-[60px] ease-in-out duration-500"
              />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://instagram.com/trentsu"
              target="_blank"
              rel="noreferrer"
              title="NTSU Instagram"
            >
              <img src={instagram} alt="instagram" className="w-[60px]" />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://twitter.com/trentstudents"
              target="_blank"
              rel="noreferrer"
              title="NTSU Twitter"
            >
              <img src={twitter} alt="twitter" className="w-[60px]" />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://www.tiktok.com/@trentstudents"
              target="_blank"
              rel="noreferrer"
              title="NTSU Tiktok"
            >
              <img src={tiktok} alt="tiktok" className="w-[60px]" />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://www.youtube.com/user/NottinghamTrentSU"
              target="_blank"
              rel="noreferrer"
              title="NTSU Youtube"
            >
              <img src={youtube} alt="youtube" className="w-[60px]" />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://www.linkedin.com/company/nottingham-trent-students'%E2%80%8B-union/"
              target="_blank"
              rel="noreferrer"
              title="NTSU Linkedin"
            >
              <img src={linkedin} alt="Linkedin" className="w-[60px]" />
            </a>
          </div>
        </div>
        {/* UONSU */}
        <div className="flex flex-col lg:flex-row justify-between mx-auto mt-4 w-[90%] lg:w-[80%] border-b-2 border-gray-300">
          <h3 className="text-4xl text-oceanBlue font-semibold mb-6 flex gap-4 mx-auto my-2 lg:mx-0">
            <img src={Uon} alt="UoN logo" className="w-[200px]" />
          </h3>
          <div className="flex flex-row gap-4 pb-6 items-center">
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://www.facebook.com/UofNSU"
              target="_blank"
              rel="noreferrer"
              title="UONSU Facebook"
            >
              <img
                src={facebook}
                alt="facebook"
                className="w-[60px] ease-in-out duration-500"
              />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://www.instagram.com/uonsu"
              target="_blank"
              rel="noreferrer"
              title="UONSU Instagram"
            >
              <img src={instagram} alt="instagram" className="w-[60px]" />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://twitter.com/UoNSU"
              target="_blank"
              rel="noreferrer"
              title="UONSU Twitter"
            >
              <img src={twitter} alt="twiiter" className="w-[60px]" />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://www.snapchat.com/add/uonsu"
              target="_blank"
              rel="noreferrer"
              title="UONSU Snapchat"
            >
              <img
                src={snapchat}
                alt="snapchat"
                className="w-[60px] ease-in-out duration-500"
              />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://www.youtube.com/user/UoNstudentsUnion"
              target="_blank"
              rel="noreferrer"
              title="UONSU Youtube"
            >
              <img src={youtube} alt="youtube" className="w-[60px]" />
            </a>
            <a
              className="text-neutral-50 px-2 py-1"
              href="https://www.linkedin.com/company/uonsu"
              target="_blank"
              title="UONSU Linkedin"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-[60px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
