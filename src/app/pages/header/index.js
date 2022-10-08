import React, { useState } from 'react';
// import logo from '../../../assets/images/logo.png';
import './index.scss';
import { HashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router';


const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const history = useHistory();

    const handleClickScroll = () => {
        history.push('/')
        window.scrollTo(0, 0);
    };

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-90px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div>
            <div className='header fixed-top fixed-header' id='navbar'>
                <nav className='navigation'>
                    <a className='header-name'>
                    </a>
                    <button onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                        className='hamburger'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className={
                        isNavExpanded ? 'header-menu expanded' : 'header-menu'
                    }>
                        <ul>
                            <li><HashLink smooth to='#about-us' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                About
                            </HashLink> </li>
                            <li> <HashLink smooth to='#how-to-apply' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                How to Apply
                            </HashLink> </li>
                            <li><HashLink smooth to='#jobs' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                Jobs
                            </HashLink> </li>
                            <li><HashLink smooth to='#contact-us' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                Contact Us
                            </HashLink> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;