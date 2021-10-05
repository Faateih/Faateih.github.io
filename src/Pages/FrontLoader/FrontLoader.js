import React from 'react'
import loader from '../../assets/images/loogo.png';

function FrontLoader() {
    return (
        <div className='front-loader'>
              <div class="circle pulse"></div>
            <img src={loader} alt='Loader' className='front-loader__center'/>
        </div>
    )
}

export default FrontLoader;
