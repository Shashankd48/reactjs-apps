import React from 'react'
import LineStarLine from './LineStartLine'
const PortfolioModel  = ({title, modelImage, modelText,modelId}) => {
    return (
        <div class="portfolio-modal modal fade" id={modelId} tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">

                                    {/* Portfolio Modal - Title */}
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{title}</h2>

                                    {/* Icon Divider */}
                                    <LineStarLine color="divider-custom"/> 
                                    
                                    {/* Portfolio Modal - Image */}
                                    <img class="img-fluid rounded mb-5" src={modelImage} alt="" />

                                    {/* Portfolio Modal - Text */}
                                    <p class="mb-5">{modelText}</p>

                                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioModel