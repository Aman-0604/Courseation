import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            {/* Navbar starts */}
            <nav className="navbar navbar-expand-lg" style={{borderBottom:"1px solid #E9EEF2", color:"white"}}>
                <div className="container-fluid">
                    {/* Logo-without-background */}
                    <Link className="navbar-brand" to="/">
                        <img src="../images/logo-without-bg.png" alt="Logo" width="240" height="50" className="d-inline-block align-text-top ms-5" />
                    </Link>

                    {/* Button enabled in presence of small devices */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 'Log in' and 'Join for free' Buttons */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button type="button" className="btn btn-outline-success me-3">Log in</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-secondary me-5">Join for free</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar ends */}
        </>
    )
}
