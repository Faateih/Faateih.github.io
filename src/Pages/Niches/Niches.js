import React from 'react';
import Description from '../Services/Description';
import Card from '../Technolgies/Card';
import frontendd from '../../assets/cross platform.jpg'

function Niches() {
    return (
        <div className='main-nichess'>
        <div className='center'>
        <div className='center__left'>
        <Description 
        description = 'Our Team has already gained experience helping various business sectors, now we are ready to help you' />
        </div>
        <div className='center__right'>
        <Card image={frontendd} heading='Healthcare' nichesdet = 'Get our expertise in building apps for the healthcare industry.' />
        <Card image={frontendd} heading='On-demand' nichesdet='We help you create Uber-like solutions to suit any needs.' />
       <Card image={frontendd} heading='Enterprise' nichesdet = 'Opting for scalable, stable solution with high bandwidth? Contact us to see how we can help you.' />
       <Card image={frontendd} heading='Healthcare' nichesdet = 'Get our expertise in building apps for the healthcare industry.' />
        <Card image={frontendd} heading='On-demand' nichesdet='We help you create Uber-like solutions to suit any needs.' />
       <Card image={frontendd} heading='Enterprise' nichesdet = 'Opting for scalable, stable solution with high bandwidth? Contact us to see how we can help you.' />
        </div>
        </div>
         </div>
    )
}

export default Niches;
