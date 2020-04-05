import React from 'react';
import './css/styles.css';
import NavBar from './NavBar';
import Header from './Header'
import Portfolio from './Portfolio'
import avatar from  './assets/img/avataaars.svg'
import InfoSection from './InfoSection'
import FormSection from './FormSection';
import Footer from './Footer';
import Copywrite from './Copywrite'
const App = () => {
    return (
        <div>
            <NavBar title="LearnCodeOnline.in"/>
            <Header title="Learn Code Online" subTitle="Home for Programmers" headerImage={avatar}/>
            <Portfolio heading="LCO Portfolio"/>
            <InfoSection
                heading = "About LCO"
                paraOne = "Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization."

                paraTwo = "You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!"

                buttonText = "Visit LCO"
                buttonLink = "https://web.learncodeonline.in/"
            />
            <FormSection heading="Contact LCO"/>
            <Footer
                addLine1 = "LCO Training Center"
                addLine2 = " Rajawat Tower-3rd Floor,"
                addLine3 = " 7-Number-Skit Chaurah, Jagatpura"
                addLine4 = "Jaipur, Rajasthan PIN: 302017"
                facebook = "https://fb.com/hiteshchoudharypage"
                twitter = " "
                linkedin = " "
                instagram = "https://www.instagram.com/hiteshchoudharyofficial/"
                shortTitle = "LCO"
                aboutShortText = "LearnCodeOnline is a platform to learn programming with high quality videos at affordable price."
                refrenceLink = "https://courses.learncodeonline.in/"
                refrenceLinkText = "Start Learning"
            />
            <Copywrite webSite=" learncodeonline.in "/>
        </div>
    )
}

export default App