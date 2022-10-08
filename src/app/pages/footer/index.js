import React from 'react';
import './index.scss';
import logo from '../../../assets/images/logo.png';
import iconf from '../../../assets/images/icon-f.svg';
import iconi from '../../../assets/images/icon-i.svg';
import iconl from '../../../assets/images/icon-l.svg';
import iconp from '../../../assets/images/icon-p.svg';
import icone from '../../../assets/images/icon-e.svg';
import iconlo from '../../../assets/images/icon-lo.svg';
import { HashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router';

const Footer = () => {
    const history = useHistory();

    const handleClickScroll = () => {
        history.push('/')
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className='footer' id='contact-us'>
                <div className='footer__container'>
                    <div className='footer__section'>
                        <div className='footer__left'>
                            <img src={logo} alt='' />
                            <p>Lorem ipsum dolor sit amet. Ea possimus suscipit. Lorem ipsum dolor sit amet. Ea possimus suscipit</p>
                            <div className='footer__icons'>
                                <a><i className='fa fa-linkedin' /></a>
                                <a><i className='fa fa-instagram' /></a>
                                <a><i className='fa fa-facebook' /></a>
                            </div>
                        </div>
                        <div className='footer__center1'>
                            <h2>Menu</h2>
                            <a><h6><HashLink smooth to='#about-us' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                About
                            </HashLink></h6></a>
                            <a><h6><HashLink smooth to='#how-to-apply' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                How to Apply
                            </HashLink></h6></a>
                            <a><h6><HashLink smooth to='#jobs' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                Jobs
                            </HashLink></h6></a>
                        </div>
                        <div className='footer__center2'>
                            <h2>Contact Us</h2>
                            <div className='footer__phone'>
                                <i className='fa fa-phone' />
                                <h6>+91 9988751423 <br />+91 9542678154</h6>
                            </div>
                            <div className='footer__email'>
                                <i className='fa fa-envelope' />
                                <h6>admin123@gmail.com</h6>
                            </div>
                        </div>
                        <div className='footer__right'>
                            <h2>Address</h2>
                            <div className='footer__address'>
                                <i className='fa fa-map-marker' />
                                <h6>No 11, kathirikuppe circle banashankari,bangaluru Karnataka-568975</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;