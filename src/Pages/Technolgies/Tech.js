import React from 'react'
import Card from './Card';
import Description from '../Services/Description';
import crossplat from '../../assets/cross platform.jpg';
import frontend from '../../assets/front end development.jpg'
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Tech() {
    useEffect(() => {
        Aos.init({duration: 500});
 }, []);
    return (
        <div className='main-techh' data-aos='fade-up'>
        <div className='center'>
        <div className='center__left'>
        <Description description = 'We use only proven and reliable technologies to ensure your app will perform seamlessly' />
        </div>
        <div className='center__right'>
        <Card image={crossplat} heading='Cross-Platform Development' btn='React Native' />
        <Card image={frontend} heading='Front-End Development' btn='Vue.js' btn2='React.js' />
       <Card image={crossplat} heading='Back-End Development' btn='Node.js' btn2='AWS' btn3='Firebase' />
        </div>
        </div>
         </div>
    )
}

export default Tech;
