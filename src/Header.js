import React from 'react';
import LineStarLine from './smallComponent/LineStartLine'
const Header = ({title, subTitle, headerImage}) => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={headerImage} alt="Not found"/>

                <h1 className="masthead-heading text-uppercase mb-0">{title}</h1>

                <LineStarLine color="divider-custom divider-light"/>
                <p className="masthead-subheading font-weight-light mb-0">{subTitle}</p>
            </div>
        </header>
    )
}
export default Header;