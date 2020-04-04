import React from 'react'
import LineStarLine from './smallComponent/LineStartLine'

const InfoSection = ({heading, paraOne, paraTwo,buttonText,buttonLink}) => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">

                {/* About Section Heading */}

                <h2 className="page-section-heading text-center text-uppercase text-white">{heading}</h2>

                {/* Icon Divider */}
                <LineStarLine color="divider-custom divider-light"/>


                {/* Section Content */}
                <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <p className="lead">{paraOne}</p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="lead">{paraTwo}</p>
                    </div>
                </div>

                {/* Section Button */}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href={buttonLink}>
                        <i className="fas fa-download mr-2"></i>
                        {buttonText}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default InfoSection