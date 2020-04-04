import React from 'react'
import LineStarLine from './smallComponent/LineStartLine'
import Form from './smallComponent/Form'
const FormSection = ({heading}) => {
    return (
        <section className="page-section" id="contact">
            <div className="container">

                {/*Heading goes here */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{heading}</h2>

                {/* Icon Divider */}
                <LineStarLine color="divider-custom"/>
                
                
                {/* Form Section */}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <Form/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormSection
