import React from 'react';
import {FiMapPin} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import Header from '../../components/header';


function Contact() {
    useEffect(() => {
        Aos.init({duration: 1500});
 }, []);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
        <div className='contact'>
            <div className='contact__middle' data-aos='fade-up'>
                <div className='contact__left'>
                    <div className='contact__left-container'>
                    <div className='contact__heading'>Contact Us</div>
                        <div className='contact__location'><FiMapPin/><span className='contact__locspan'> DHA Rahbar</span></div>
                        <div className='contact__email'><AiOutlineMail/><span className='contact__mail'>cbsolpro@gmail.com</span></div>
                        <div className='contact__call'><BiPhoneCall/> <span className='contact__num'>+92-XXX-XXXXXX</span></div>
                       <div className='contact__social'>
                        <div className='contact__fb'><FiFacebook/></div>
                        <div className='contact__fb'><AiOutlineInstagram/></div>
                        <div className='contact__fb'><AiOutlineLinkedin/></div>
                        </div>
                    </div>
                </div>
                <form className='contact__right'>
                    <div className='contact__right-head'>Send Us A Message</div>
                    <input type='text'  placeholder='Enter Your Name' className='contact__right-put'/>
                    <input type='email'  placeholder='Enter Your Email' className='contact__right-put'/>
                    <input type='text'  placeholder='Enter Your Phone number' className='contact__right-put'/>
                    <textarea type='text'  placeholder='Enter Your Message' className='contact__right-message'/>
                    <button className='contact__button'>Send</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Contact;
