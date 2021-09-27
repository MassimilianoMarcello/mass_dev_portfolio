import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons"

function NavBar() {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="iflex=flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            MassDev
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-green-700"
          >
            Blog posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-green-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-green-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-3">
          <SocialIcon
            url="https://twitter.com/dedalorfico"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ heigt: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/explore/tags/webdeveloper/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ heigt: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/Linus-Torvalds-47144560930/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ heigt: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
