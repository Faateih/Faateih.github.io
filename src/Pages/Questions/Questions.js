import React from 'react';
import cancel from '../../assets/x-lg.svg';
import {BiPlus} from 'react-icons/bi';
import {VscClose} from 'react-icons/vsc';
import {useState} from 'react';

function Questions() {
    const[ansOpen, setAnsOpen] = useState(false);
    const[ansOpen3, setAnsOpen3] = useState(false);
    const[ansOpen4, setAnsOpen4] = useState(false);
    const[ansOpen5, setAnsOpen5] = useState(false);
    const[ansOpen6, setAnsOpen6] = useState(false);
    const[ansOpen7, setAnsOpen7] = useState(false);
    const[ansOpen8, setAnsOpen8] = useState(false);
    return (
        <div className='questions'>
            <h1 className='questions__qhead-primary'>See Frequently Asked Questions</h1>
            <h2 className='questions__qhead-secondary'>We advise, answer questions, find solutions and create dedicated web applications. If you need more information, please call us!</h2>
            <div className='questions__border-down'></div>
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen(!ansOpen);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                {ansOpen===false &&<span className='questions__ques--plus'><BiPlus/></span> }
                {ansOpen===true &&<span className='questions__ques--plus'><VscClose/></span> }
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen===true &&
            <>
            <div className='questions__ques--ans'>We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down'></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen3(!ansOpen3);
                }}>
                <div className='questions__ques--bold'>What kind of experience do you have in IT projects?
                {ansOpen3===false &&<span className='questions__ques--plus'><BiPlus/></span> }
                {ansOpen3===true &&<span className='questions__ques--plus'><VscClose/></span> }
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen3===true &&
            <>
            <div className='questions__ques--ans'>Our team has completed and implemented several dozen projects. We have competence in programming, IT project management, analytics. Our skills and experience are not limited only to code creation. We are able to provide our customers with a comprehensive service - from the idea to implementation and development.</div>
            <div className='questions__border-down'></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen4(!ansOpen4);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                {ansOpen4===false &&<span className='questions__ques--plus'><BiPlus/></span> }
                {ansOpen4===true &&<span className='questions__ques--plus'><VscClose/></span> }
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen4===true  && 
            <>
            <div className='questions__ques--ans'>We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down'></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen5(!ansOpen5);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                {ansOpen5===false &&<span className='questions__ques--plus'><BiPlus/></span> }
                {ansOpen5===true &&<span className='questions__ques--plus'><VscClose/></span> }
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen5===true &&
            <>
            <div className='questions__ques--ans'>We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down'></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen6(!ansOpen6);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                {ansOpen6===false &&<span className='questions__ques--plus'><BiPlus/></span> }
                {ansOpen6===true &&<span className='questions__ques--plus'><VscClose/></span> }
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen6===true &&
            <>
            <div className='questions__ques--ans'>We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down'></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen7(!ansOpen7);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                {ansOpen7===false &&<span className='questions__ques--plus'><BiPlus/></span> }
                {ansOpen7===true &&<span className='questions__ques--plus'><VscClose/></span> }
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen7===true &&
            <>
            <div className='questions__ques--ans'>We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down'></div>
            </>
            }
            <div className='questions__ques'  onClick={()=> {
                    setAnsOpen8(!ansOpen8);
                }}>
                <div className='questions__ques--bold'>What services and products do you offer?
                {ansOpen8===false &&<span className='questions__ques--plus'><BiPlus/></span> }
                {ansOpen8===true &&<span className='questions__ques--plus'><VscClose/></span> }
                </div>
            </div> 
            <div className='questions__border-down'></div>
            {ansOpen8===true &&
            <>
            <div className='questions__ques--ans'>We advise, answer questions, find solutions and create</div>
            <div className='questions__border-down'></div>
            </>
            }
        </div>
    )
}

export default Questions;
