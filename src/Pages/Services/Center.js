import React from 'react';
import Description from './Description';
import Cards from './Cards';
import mobile from '../../assets/Mobile.png'
import web from '../../assets/Web.png';
import support from '../../assets/support.png';
import design from '../../assets/design.png';
import testing from '../../assets/testing.png';
import workshop from '../../assets/workshop.png';

const Center = () => {
    return (
        <div className='center'>
           <div className='center__left'>
               <Description description = 'We build successful, long-lasting, profitable products for our clients and can help you with your projects' />
               </div>
               <div className='center__right'>
                   <Cards icons={mobile}  title = 'Mobile Application' title2 = 'We like to make life easier for ourselves and for others, so we will create an application that will not only stand out from the crowd and give real profits, but will also be useful.' button='Click Here' arrow='&rarr;' />
                   <Cards icons={web} title = 'Web Application' title2 = 'We will give to your ideas thanks to our experience in comprehensive software development for medium and large enterprises.' button='Click Here' />
                   <Cards icons={support} title = 'Product Design' title2 = 'We will optimize development costs and assess your capabilities thanks to our practical knowledge and experience in the IT industry.' button='Click Here' />
                   <Cards icons={testing} title = 'QA & Testing' title2 = 'Our experience in reducing testing costs and reducing the time to market of a ready-made application that has the highest level of code.' button='Click Here' arrow='&rarr;' />
                   <Cards icons={design} title = 'Data Security' title2 = 'We will identify the scope of the application, the phase of its creation, industry or suitability. We will focus most on the capabilities.' button='Click Here' />
                   <Cards icons={workshop} title = 'Discovery Workshop' title2 = 'Discovery Product Workshops are a brilliant place to test your idea for an application and solve IT problems in your business.' button='Click Here' />
               </div>
           </div>
    )
}

export default Center
