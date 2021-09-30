import React from 'react';
import Product from '../../Pages/ProductCase/Product';
import Header from '../../components/header';
import cblogo from '../../assets/images/cblogoo.png';
import proimage from '../../assets/images/logo-klienta-9.png';
import imagebel from '../../assets/images/logo-klienta-18.png';
import backgrounds from '../../assets/images/399.jpg';
import Footer from '../../components/footer';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Products() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
        <div className='product'>
        <img src = {backgrounds} alt='Product Back' className='productcase__background' data-aos='fade-up'/>
            <Product logos={cblogo} proname='Royal Enfield' 
            descshort='fhhf fhfh ffffiufif fffifffg ffiuffui fiuffiufhhf fuufhfinjddd d dd dddd dd duididdi ddydidgdgddlguhf fffif ifiugf figf gyfg gfgfgf'
            imagepro={proimage} imagebelow={imagebel} desclong='hdddddddd dhhhhhhhhhh hhhhhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhh' />
            <Product logos={cblogo} proname='Royal Enfield' 
            descshort='fhhf fhfh ffffiufif fffifffg ffiuffui fiuffiufhhf fuufhfinjddd d dd dddd dd duididdi ddydidgdgddlguhf fffif ifiugf figf gyfg gfgfgf'
            imagepro={proimage} imagebelow={imagebel} desclong='hdddddddd dhhhhhhhhhh hhhhhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhh' />
        <Product logos={cblogo} proname='Royal Enfield' 
            descshort='fhhf fhfh ffffiufif fffifffg ffiuffui fiuffiufhhf fuufhfinjddd d dd dddd dd duididdi ddydidgdgddlguhf fffif ifiugf figf gyfg gfgfgf'
            imagepro={proimage} imagebelow={imagebel} desclong='hdddddddd dhhhhhhhhhh hhhhhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhh' />
                
        </div>
        <Footer />
        </div>
    )
}

export default Products;