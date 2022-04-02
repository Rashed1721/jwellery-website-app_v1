import React from 'react';
import Footer from '../Home/Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductShow = () => {

    return (
        <div>
            <NavBar></NavBar>

            <div className='row'>
                <ProductDetail></ProductDetail>
                <ProductDetail></ProductDetail>
                <ProductDetail></ProductDetail>
                <ProductDetail></ProductDetail>
                <ProductDetail></ProductDetail>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductShow;