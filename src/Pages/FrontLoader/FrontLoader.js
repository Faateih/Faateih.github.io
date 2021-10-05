import React from 'react'
import loader from '../../assets/images/cblogoo.png';

function FrontLoader() {
    return (
        <div className='front-loader'>
            <img src={loader} alt='Loader' className='front-loader__center'/>
        </div>
    )
}

export default FrontLoader;
