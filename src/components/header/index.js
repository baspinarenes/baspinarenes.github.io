import React from "react";
import Navlink from "./navlink";
import { MenuIcon } from "@heroicons/react/outline";
import GithubSVG from "../../images/github.svg";
import TwitterSVG from "../../images/twitter.svg";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const Header = ({ isShowHamburgerMenu, setIsShowHamburgerMenu }) => {
  const { social } = useSiteMetadata();

  const handleHamburgerClick = state => {
    setIsShowHamburgerMenu(state);
  };

  return (
    <div className="page-header">
      <button
        className="hamburger-toggle"
        onClick={() => handleHamburgerClick(!isShowHamburgerMenu)}
      >
        <MenuIcon />
      </button>
      <nav
        className="nav-links"
        style={{ display: isShowHamburgerMenu && "flex" }}
        onClick={() => handleHamburgerClick(false)}
      >
        <Navlink path="/" title="Anasayfa" />
        <Navlink path="/blog" title="Blog" />
        {/* <Navlink path="/snippets" title="Snippets" />
        <Navlink path="/cv" title="Özgeçmiş" /> */}
        <span className="nav-footer">
          Enes Başpınar © 2021
        </span>
      </nav>
      <div className="socials">
        {/* <button className="dark-mode-toggle">
          <MoonIcon />
        </button> */}
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={GithubSVG} alt="" />
        </a>
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={TwitterSVG} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
