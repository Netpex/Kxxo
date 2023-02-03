import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "../../styles/global/header.scss";

export default function Header() {

    //const userData = useContext(UserData);

    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-container');
        const scrollTop = window.scrollY;
        console.log(scrollTop);
        if (92-scrollTop > 0) {
            document.querySelector(".banner-container").style.height = 92-scrollTop+"px";
            document.querySelector(".top-banner").style.width = 268.8-scrollTop+"px";
        } else {
            document.querySelector(".banner-container").style.height = 0+"px"
        };
        if (scrollTop >= 70) { 
            document.querySelector(".title-container").classList.remove('hidden')
            document.querySelector(".title-container").classList.add('loaded')
            header.classList.add('sticky')
        } else {
            document.querySelector(".title-container").classList.add('hidden')
            document.querySelector(".title-container").classList.remove('loaded')
            header.classList.remove('sticky')
        };
    };

    return (
        <header>

            <div className="banner-container">
            <img className="top-banner" src={process.env.PUBLIC_URL + "/images/banner.jpg"} alt="banner"/>
            </div>

            <div className="playing-container">
                <i className="fa-solid fa-volume-high"></i>
                <h1>Now Playing</h1><h1 className="main-text">Running Up That Hill</h1><h1 className="sub-text">Kate Bush</h1>
            </div>

            <div className="header-container">
                <div className="title-container hidden">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo"/>
                        <h1>Play KXXO 96.1</h1>
                    </Link>
                </div>

                <div className="nav" mobile-nav-open={mobileNavOpen.toString()}>
                    <Link to="/">Home</Link>
                    <Link to="/ourteam">Our Team</Link>
                    <Link to="/advertise">Advertise</Link>
                    <Link to="/connect">Connect <i className="fa-solid fa-caret-down"></i></Link>
                    <Link to="/events">Events <i className="fa-solid fa-caret-down"></i></Link>
                    <Link to="/songs">Songs <i className="fa-solid fa-caret-down"></i></Link>
                    <Link to="/updates">Updates <i className="fa-solid fa-caret-down"></i></Link>
                </div>


                <a className="club" href="/joinus" target="_self" rel="noreferrer">
                <i className="fa-solid fa-user-plus"></i>
                    <h1>Club</h1>
                </a>

                <a className="listen" href="/listen" target="_self" rel="noreferrer">
                    <i className="fa-solid fa-circle-play"></i>
                    <h1>Play KXXO</h1>
                </a>
            </div>

        </header>
    )
}