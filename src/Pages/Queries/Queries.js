import React from "react";

function Queries(props) {
    return (
        <form className='queries'>
            <div className='queries__query'>
                <div className='queries__main'>{props.queryhead}</div>
                <div className='queries__sub'>{props.querysub}</div>
                <div className='queries__icon'>{props.iconmail}</div>
            </div>
            <div className='mail'>
                <div className='mail__left'>
                    <input type='text' placeholder='Your name' className='mail__email'></input>
                    <input type='email' placeholder='E-mail address' className='mail__email'></input>
                    <input type='text' placeholder='Phone number' className='mail__email'></input>
                    <input type='text' placeholder='Your message or query' className='mail__email'></input>
                    <button className='mail__button'>{props.button}<span className='card__arrow'> &rarr;</span></button>

                </div>
                <div className='mail__center'></div>
                <div className='mail__right'>
                <div className='mail__flex'>
                    <img src={props.mailpic} alt='Pic' className='mail__picture' />
                    <div className='mail__data'>
                    <div className='mail__heading'>{props.mailname}</div>
                    <div className='mail__details'>{props.maildetail}</div>
                    <div className='mail__phone'>
                    <img src={props.mobile} alt='mobile' className='mail__mobile' /> <span className='mail__num'>887-999-777-666</span>
                    </div>
                    <div className='mail__emaile'>umairali123@gmail.com</div>
                    </div>
                    </div>
                    <div className='mail__flex'>
                    <img src={props.mailpicf} alt='Pic' className='mail__picture' />
                    <div className='mail__data'>
                    <div className='mail__heading'>{props.mailnamef}</div>
                    <div className='mail__details'>{props.maildetailf}</div>
                    <div className='mail__phone'>
                    <img src={props.mobile} alt='mobile' className='mail__mobile' /> <span className='mail__num'>887-999-777-666</span>
                    </div>
                    <div className='mail__emaile'>frazkhan123@gmail.com</div>
                    </div>
                    </div>
                    </div>
                </div>
            </form>
    )
}

export default Queries;
