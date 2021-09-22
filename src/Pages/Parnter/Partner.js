import React from 'react';
import Part1 from '../../assets/Microsoft.png';
import Part2 from '../../assets/partner 2.png';
import Part3 from '../../assets/partner3.png';
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Partner() {
    useEffect(() => {
        Aos.init({duration: 1000});
 }, []);
    return (
        <div className="partner" data-aos='fade-up'>
            <h1 className="partner__tag">Our Partners</h1>
            <div className="partner__pics">
                <img src={Part1} alt='Partner' className='partner__pic' />
                <img src={Part2} alt='Partner' className='partner__pic' />
                <img src={Part3} alt='Partner' className='partner__pic' />
            </div>
        </div>
    )
}

export default Partner;
