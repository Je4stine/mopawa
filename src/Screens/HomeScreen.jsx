import React from 'react';
import About from '../Components/About/About';
import MyCarousel from '../Components/Carousel/Carousel';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Header/NavBar';

function HomeScreen() {
  return (
    <div style={{ display:"flex", flexDirection:'column', flex:1}}>
         <NavBar/>
         <MyCarousel/>
         <About/>
         <Footer/>
    </div>
    )
   
};

export default HomeScreen;