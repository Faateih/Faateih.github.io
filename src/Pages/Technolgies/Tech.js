import React from 'react'
import Card from './Card';
import Description from '../Services/Description';
import native from '../../assets/native.png';

function Tech() {
    return (
        <div className='main-techh'>
        <div className='center'>
        <div className='center__left'>
        <Description description = 'We use only proven and reliable technologies to ensure your app will perform seamlessly' />
        </div>
        <div className='center__right'>
        <Card image={native} heading='Cross-Platform Development' btn='React Native' />
        <Card image={native} heading='Front-End Development' btn='Vue.js' btn2='React.js' />
       <Card image={native} heading='Back-End Development' btn='Node.js' btn2='AWS' btn3='Firebase' />
        </div>
        </div>
         </div>
    )
}

export default Tech;
