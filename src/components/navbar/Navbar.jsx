import React, { useState } from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg'

const Menu = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wgpt3'>VisionForge</a></p>
        <p><a href='#possibility'>Transformation</a></p>
        <p><a href='#features'>Empowerment</a></p>
        <p><a href='#blog'>Blog</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="vision__navbar">
            <div className="vision__navbar-links">
                <div className="vision__navbar-links_logo">
                    <img src={logo} alt='' />
                </div>

            </div>
            <div className="vision__navbar-sign">
                <div className="vision__navbar-links_container">
                    <Menu />
                    <p className='vision__navbar-links_container_p'>Sign in</p>
                </div>

                <button type="button">Sign up</button>
            </div>
            <div className="vision__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="vision__navbar-menu_container scale-up-center">
                        <div className="vision__navbar-menu_container-links">
                            <Menu />
                        </div>
                        <div className="vision__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar