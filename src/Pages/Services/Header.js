import React from 'react';

function Header(props) {
    return (
        <div className='header'>
        <ul className='header__list'>
            <li className='header__item'>{props.header}</li>
        </ul>
     </div>
    )
}

export default Header;
