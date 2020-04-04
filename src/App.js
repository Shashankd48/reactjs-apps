import React from 'react';
import './style.css';
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AppSection from './AppSection'
import CardSection from './CardSection'
import Footer from './Footer'
const App = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )
}

export default App;