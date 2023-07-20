// sidebar.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../App.css"
import "./sidebar.css"

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to="link1">Link 1</Link>
                        </li>
                        <li>
                            <Link to="link2">Link 2</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <section>
                <Outlet />
            </section>
        </>
    );
}
