import React from 'react';
import Description from './Description';
import Header from './Header';

function Services() {
    return (
        <div className='main'>
           <div className='service-header'>
               <Header header='Services' />
               <Header header='Technologies' />
               <Header header='Niches' />
           </div>
           <div className='service-desc'>
               <Description description = 'We build successful, long-lasting, profitable products for our clients and can help you with your projects' />
           </div>
           </div>
    )
}

export default Services;
