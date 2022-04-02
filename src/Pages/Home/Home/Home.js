import React from 'react';
import NavBar from '../../NavBar/NavBar';
import ProductDetail from '../../ProductDetail/ProductDetail';
import ProductShow from '../../ProductShow/ProductShow';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Owners from '../Owners/Owners';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Catagories></Catagories>
            <Owners></Owners>
            <ContactUs></ContactUs>
            <ProductDetail></ProductDetail>
            <ProductShow></ProductShow>
            <Footer></Footer>

        </div>
    );
};

export default Home;