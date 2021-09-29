import React from 'react';
import Product from '../../Pages/ProductCase/Product';
import Header from '../../components/header';
import cblogo from '../../assets/images/cblogoo.png';
import proimage from '../../assets/images/logo-klienta-9.png';
import imagebel from '../../assets/images/logo-klienta-18.png'

function Products() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
        <div className='product'>
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
        </div>
    )
}

export default Products;