import React from 'react';
import PropTypes from 'prop-types';
import './HeaderStyle.scss';
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'

const Header = ({ headerVisible }) => {

    Header.propTypes = {
        headerVisible: PropTypes.bool
    };
    return (
        <div className={headerVisible ? "headerContainer" : "secHeaderContainer"}>
            <div className="middleContainer">
                <div className="logo">
                    <h1 className="logoName">FITNESS</h1>
                    <h1 className="logoDetail">XTREME</h1>
                </div>
                <div className="navBar">
                    <ul>
                        <li>
                            <a href="/about">ABOUT US</a>
                        </li>
                        <li>
                            <a href="/classes">OUR CLASSES</a>
                        </li>
                        <li>
                            <a href="/gallery">GALLERY</a>
                        </li>
                        <li>
                            <a href="/trainers">TRAINERS</a>
                        </li>
                        <li>
                            <a href="/team">TEAM</a>
                        </li>
                    </ul>
                </div>
                <div className="lastContainer">
                    <div className='iconBox'>
                        <FaFacebookF color='white' size={20} />
                    </div>
                    <div className='iconBox'>
                        <AiOutlineTwitter color='white' size={20} />
                    </div>
                    <div className='iconBox'>
                        <h1 className='languageText'>EN</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
