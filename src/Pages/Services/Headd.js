import React from 'react'
import Header from './Header';
import { useState } from 'react';
import Services from './Services';
import Tech from '../Technolgies/Tech';
import Niches from '../Niches/Niches';


function Headd(props) {
    const[isOpen1, setIsOpen1] = useState(true);
    const[isOpen2, setIsOpen2] = useState(false);
    const[isOpen3, setIsOpen3] = useState(false);
    return (
        <div>
        <div className='service-header'>
        <Header header='Services' click={()=>{
            setIsOpen1(true);
            setIsOpen2(false);
            setIsOpen3(false);
        }} />
        <Header header='Technologies' click={()=>{
            setIsOpen1(false);
            setIsOpen2(true);
            setIsOpen3(false);
        }} />
        <Header header='Niches' click={()=>{
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(true);
        }} />
    </div>
    <div>
            <div className='ourservice'>
            {isOpen1===true &&
            <div className='ourservice__servic'>
                <Services />
                </div> }
                {isOpen2===true &&
                <div className='ourservice__techn'>
                <Tech />
                </div>
                }
                {isOpen3===true &&
                <div className='ourservice__nichs'>
                <Niches />
                </div>
                }
            </div>
        </div>
    </div>
    )
}

export default Headd;
