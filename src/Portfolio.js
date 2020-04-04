import React from 'react'
import LineStarLine from './smallComponent/LineStartLine';
import Card from './smallComponent/Card'

//Card Images 
import cabin from './assets/img/portfolio/cabin.png';
import cake from './assets/img/portfolio/cake.png'
import circus from './assets/img/portfolio/circus.png'
import game from './assets/img/portfolio/game.png'
import safe from './assets/img/portfolio/safe.png'
import submarine from './assets/img/portfolio/submarine.png'

const Portfolio = ({heading}) =>{
    return (
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
            
                {/* Heading Porfolio */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{heading}</h2>

                {/* Icon Divider */}
                <LineStarLine color="divider-custom"/>
                
                {/**Portfolio Grid Items */}
                <div class="row">
                    {/**Portfolio Item */}
                    <Card cardImage={cabin}/>
                    
                    <Card cardImage={cake}/>

                    <Card cardImage={circus}/>

                    <Card cardImage={game}/>

                    <Card cardImage={safe}/>
                    
                    <Card cardImage={submarine}/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;