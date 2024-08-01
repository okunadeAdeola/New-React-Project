import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "./FooterLogo";
import FooterAboutUs from "./FooterAboutUs";
import FooterContactUs from "./FooterContactUs";
import FooterSocialMediaSection from "./FooterSocialMediaSection";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-800 py-2 mt-5 px-4 lg:px-2">
        <div className="container flex flex-wrap justify-between">
          <FooterLogo />
          <FooterAboutUs />
          <FooterContactUs />
          <FooterSocialMediaSection Link={Link} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
