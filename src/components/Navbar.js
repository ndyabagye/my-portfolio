import React from "react";
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

export default function Navbar() {
    return (
        <header className="bg-red-500">
            <div className="container mx-auto flex justify-between flex-wrap">
                <nav className="flex">
                    <NavLink to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-4xl font-bold cursive tracking-widest">
                        Henry
                    </NavLink>
                    <NavLink to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white"
                        activeClassName="text-red-100 bg-red-600"
                    >
                        Blog Post
                    </NavLink>
                    <NavLink to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white"
                        activeClassName="text-red-100 bg-red-600"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white"
                        activeClassName="text-red-100 bg-red-600"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/ndyabagye" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://twitter.com/henry_ndyabagye" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.instagram.com/_sir_henny/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    );
}
