import React from 'react'

const Footer = ({
    addLine1, 
    addLine2,
    addLine3,
    addLine4,
    facebook,
    twitter,
    linkedin,
    instagram,
    shortTitle,
    aboutShortText,
    refrenceLink,
    refrenceLinkText
}) => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">

                    {/* Footer Location */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Get In Touch</h4>
                        <p className="lead mb-0">{addLine1}<br />{addLine2}<br />{addLine3}<br/>{addLine4}</p>
                    </div>


                    {/* Footer Social Icons */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>

                        <a className="btn btn-outline-light btn-social mx-1" href={facebook}><i className="fab fa-fw fa-facebook-f"></i></a>

                        <a className="btn btn-outline-light btn-social mx-1" href={twitter}><i className="fab fa-fw fa-twitter"></i></a>

                        <a className="btn btn-outline-light btn-social mx-1" href={linkedin}><i className="fab fa-fw fa-linkedin-in"></i></a>

                        <a className="btn btn-outline-light btn-social mx-1" href={instagram}><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>

                    {/* Footer About Text */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About {shortTitle}</h4>
                        <p className="lead mb-0">
                            {aboutShortText}
                            <br/>
                        <a href={refrenceLink}>{refrenceLinkText}</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer