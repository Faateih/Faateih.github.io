import React from 'react';
import {HiPlus} from 'react-icons/hi';
import {BiUser} from 'react-icons/bi';
import {useState} from 'react';

function Careers(props) {
    const [isUpload, setIsUpload] = useState("");
    return (
        <form className='careers' id='aboutussectionfour'>
            <div className='careers__tag'>Welcome to Careers</div>
            <div className='middle'> 
                <div className='middle__left'>
                <input type='text' placeholder='Your Name' className='middle__field'/>
                <input type='email' placeholder='example@gmail.com' className='middle__field'/>
                 <input type='text' placeholder='+92xxx-xxxxxxx' className='middle__field'/>
                 <div className='middle__field'>
                     <div className='middle__field--select'>
                         <select className='middle__field--selec'>
                            <option className='middle__field--opt'>Choose Your Concern</option>
                            <option className='middle__field--opt'>Option 1</option>
                            <option className='middle__field--opt'>Option 1</option>
                         </select>
                     </div>
                 </div>
                 <div className='middle__field--1'>
                 <div className='middle__field--2'> {isUpload === "" ? "Upload Your CV Here" : isUpload} <span className='middle__span'><HiPlus/></span> </div>
                    </div>
                    <input type='file' onChange={(e) => setIsUpload(e.target.files[0].name)} className='middle__inpfile'/>
                    <button className='middle__btn '>Submit Here</button>
                </div>
                <div className='middle__center'></div>
                <div className='middle__right'>
                <div className='middle__vac'> We are Hiring! </div>
                    <div className='middle__data'>
                        <div className='middle__icons'><BiUser/></div>
                        <div className='middle__vacancy'>Web Development</div>
                        <div className='middle__line'></div>
                        <div className='middle__opens'>2 Years of Experience</div>
                    </div>
                    <div className='middle__data'>
                        <div className='middle__icons'><BiUser/></div>
                        <div className='middle__vacancy'>Web Development</div>
                        <div className='middle__line'></div>
                        <div className='middle__opens'>Fresh Graduates</div>
                    </div>
                    <div className='middle__data'>
                        <div className='middle__icons'><BiUser/></div>
                        <div className='middle__vacancy'>Web Development</div>
                        <div className='middle__line'></div>
                        <div className='middle__opens'> 1 years of Experience</div>
                    </div>
                </div>
            </div>
            </form>
    )
}
   

export default Careers;



 //     <div className='careers'>
    //     {/* {/* <div className='careers__head'>
    //         Welcome to Careers
    //     </div>
    //         <div className='careers__left'>
    //                 <input type='text' placeholder='Your Name' className='careers__field'/>
    //                 <input type='text' placeholder='E-mail address' className='careers__field'/>
    //                 <input type='text' placeholder='Phone Number' className='careers__field'/>
    //                 <select className='careers__field'>
    //                     <option className='careers__drop'  disabled hidden selected>
    //                         Select Your Interest
    //                     </option>
    //                     <option  className='careers__drop'>
    //                         App Developement
    //                     </option>
    //                     <option  className='careers__drop'>
    //                         Data Security
    //                     </option>
    //                 </select>
    //                 <div className='careers__attach'>
    //                    <h1 className='careers__attach--tag'> Attach your CV here </h1> <span className='careers__attach--plus'> <HiPlus/></span>
    //                 </div>
    //                 <button className='careers__button'> Submit Here </button>
    //         </div> 
    //         <div className='careers__center'></div> 
    //     </div> */}
    // ) */}
