import React from 'react';
import {BiPlus} from 'react-icons/bi';
import {VscClose} from 'react-icons/vsc';
import {useState} from 'react';
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Questions() {
    useEffect(() => {
        Aos.init({duration: 1000});
 }, []);
    const[ansOpen, setAnsOpen] = useState(false);
    const[ansOpen3, setAnsOpen3] = useState(false);
    const[ansOpen4, setAnsOpen4] = useState(false);
    const[ansOpen5, setAnsOpen5] = useState(false);
    const[ansOpen6, setAnsOpen6] = useState(false);
    const[ansOpen7, setAnsOpen7] = useState(false);
    const[ansOpen8, setAnsOpen8] = useState(false);
    const rotateStyle={
        transform:'rotate(-45deg)'
    }
    return (
        <div className='questions' data-aos='fade-up'>
            <h1 className='questions__qhead-primary'>See Frequently Asked Questions</h1>
            <h2 className='questions__qhead-secondary'>We advise, answer questions, find solutions and create dedicated web applications. If you need more information, please call us!</h2>
            {/* <div className='questions__border-down'></div> */}
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen(!ansOpen);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                <span className='questions__ques--plus' style={ansOpen?rotateStyle:{}}><BiPlus/></span>
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen===true &&
            <>
            <div className='questions__ques--ans' data-aos='fade-down' data-aos-duration="600">We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down' data-aos='fade-down' data-aos-duration="900"></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen3(!ansOpen3);
                }}>
                <div className='questions__ques--bold' >What kind of experience do you have in IT projects?
                <span className='questions__ques--plus' style={ansOpen3?rotateStyle:{}}><BiPlus/></span>
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen3===true &&
            <>
            <div className='questions__ques--ans' data-aos='fade-down' data-aos-duration="600">Our team has completed and implemented several dozen projects. We have competence in programming, IT project management, analytics. Our skills and experience are not limited only to code creation. We are able to provide our customers with a comprehensive service - from the idea to implementation and development.</div>
            <div className='questions__border-down' data-aos='fade-down' data-aos-duration="600"></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen4(!ansOpen4);
                }}>
                <div className='questions__ques--bold'>What service and offer?
                <span className='questions__ques--plus' style={ansOpen4?rotateStyle:{}}><BiPlus/></span>
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen4===true  && 
            <>
            <div className='questions__ques--ans' data-aos='fade-down' data-aos-duration="600">We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down' data-aos='fade-down' data-aos-duration="600"></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen5(!ansOpen5);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                <span className='questions__ques--plus' style={ansOpen5?rotateStyle:{}}><BiPlus/></span>
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen5===true &&
            <>
            <div className='questions__ques--ans' data-aos='fade-down' data-aos-duration="600">We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down' data-aos='fade-down' data-aos-duration="600"></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen6(!ansOpen6);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                <span className='questions__ques--plus' style={ansOpen6?rotateStyle:{}}><BiPlus/></span>
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen6===true &&
            <>
            <div className='questions__ques--ans' data-aos='fade-down' data-aos-duration="600">We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down' data-aos='fade-down' data-aos-duration="600"></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen7(!ansOpen7);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                <span className='questions__ques--plus' style={ansOpen7?rotateStyle:{}}><BiPlus/></span>
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen7===true &&
            <>
            <div className='questions__ques--ans' data-aos='fade-down' data-aos-duration="600">We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down' data-aos='fade-down' data-aos-duration="600"></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen8(!ansOpen8);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                <span className='questions__ques--plus' style={ansOpen8?rotateStyle:{}}><BiPlus/></span> 
                {/* {ansOpen8===true &&<span className='questions__ques--plus'><VscClose/></span> } */}
                </div>
            </div> 
            {/* <div className='questions__border-down'></div> */}
            {ansOpen8===true &&
            <>
            <div className='questions__ques--ans' data-aos='fade-down' data-aos-duration="600">We advise, answer questions, find solutions and create</div>
            {/* <div className='questions__border-down'></div> */}
            </>
            }
        </div>
    )
}

export default Questions;
