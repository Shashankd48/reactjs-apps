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
import PortfolioModel from './smallComponent/PorfolioModel';

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
                    <Card cardImage={cabin} dataTarget="#portfolioModal1"/>
                    <PortfolioModel 
                        title="LCO Office" 
                        modelImage={cabin} 
                        modelText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam magni praesentium, officiis perferendis repellat inventore consectetur ea dolores unde dolorum?"
                        modelId = "portfolioModal1"
                    />

                    <Card cardImage={cake} dataTarget="#portfolioModal2"/>
                    <PortfolioModel 
                        title="Tasty Cake" 
                        modelImage={cake} 
                        modelText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam magni praesentium, officiis perferendis repellat inventore consectetur ea dolores unde dolorum?"
                        modelId = "portfolioModal2"
                    />

                    <Card cardImage={circus} dataTarget="#portfolioModal3"/>
                    <PortfolioModel 
                        title="Circus Tent" 
                        modelImage={circus} 
                        modelText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam magni praesentium, officiis perferendis repellat inventore consectetur ea dolores unde dolorum?"
                        modelId = "portfolioModal3"
                    />

                    <Card cardImage={game} dataTarget="#portfolioModal4"/>
                    <PortfolioModel 
                        title="Contoller" 
                        modelImage={game} 
                        modelText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam magni praesentium, officiis perferendis repellat inventore consectetur ea dolores unde dolorum?"
                        modelId = "portfolioModal4"
                    />

                    <Card cardImage={safe} dataTarget="#portfolioModal5"/>
                    <PortfolioModel 
                        title="Locked Safe" 
                        modelImage={safe} 
                        modelText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam magni praesentium, officiis perferendis repellat inventore consectetur ea dolores unde dolorum?"
                        modelId = "portfolioModal5"
                    />

                    <Card cardImage={submarine} dataTarget="#portfolioModal6"/>
                    <PortfolioModel 
                        title="Submarine" 
                        modelImage={submarine} 
                        modelText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam magni praesentium, officiis perferendis repellat inventore consectetur ea dolores unde dolorum?"
                        modelId = "portfolioModal6"
                    />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;