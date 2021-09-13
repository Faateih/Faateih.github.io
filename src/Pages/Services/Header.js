import React from 'react';

function Header(props) {
    return (
        <div className='header'>
        <ul className='header__list'>
            <li className='header__item'
            onClick={props.click}>{props.header}</li>
            <div className='header__outer'></div>
        </ul>
     </div>
    )
}

export default Header;
