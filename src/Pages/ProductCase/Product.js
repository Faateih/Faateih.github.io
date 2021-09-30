import React from 'react';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Product(props) {
    useEffect(() => {
        Aos.init({ duration: 1300 });
      }, []);
    return (
        <div className='productcase' data-aos='fade-up'>        
            <div className='productcase__head'>
                <img src = {props.logos} className='productcase__logo' alt='product'/>
                <div className='productcase__name'>{props.proname}</div>
            </div>
            <div className='productcase__detailup'>
                <div className='productcase__descshort'>{props.descshort}</div>
                <img src={props.imagepro} alt='Product' className='productcase__imagepro'/>
            </div>
            <div className='productcase__detailbelow'>
            <img src={props.imagebelow} alt='Products' className='productcase__imagebelow' />
                <div className='productcase__desclong'>{props.desclong}</div>
            </div>
        </div>
    )
}

export default Product;
