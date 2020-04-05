import React from 'react'
import PortfolioModel from './PorfolioModel'
const Card = ({cardImage, dataTarget}) => {
    return (
        <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target={dataTarget}>
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white">
                        <i class="fas fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src={cardImage} alt="" />
            </div>
        </div>
    )
}

export default Card