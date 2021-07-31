import React from "react";
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <div >
                <navbar >
                    <NavLink to="/">
                        Henry
                    </NavLink>
                    <NavLink to="/post">
                        Blog Post
                    </NavLink>
                    <NavLink to="/project" >
                        Projects
                    </NavLink>
                    <NavLink to="/about" >
                        About Me!
                    </NavLink>

                </navbar>
            </div>
        </header>
    );
}
