import React from 'react'
import { Link } from 'react-router-dom'
import { BeerApp, ArtsCenter } from './Images'

const Portfolio = () => {
    return(
        <div className="portfoliocontainer">
            
            <div className="portfolio">
                <div className="portfolio__piece">
                    
                    
                    <div className="portfolio__piece--imgcontainer">
                        <h3>Punk API App</h3>
                        <img className="portfolio__piece--img" src={BeerApp} />
                        <div className="fadebox">
                            <p className="fadebox__p">A vanilla JS app that uses the Punk API, an opensource API that allows developers to search through Brewdog's catalog of beers, to search for specific types of beer and generate lists of beer based on certain criteria.</p>
                            <p className="fadebox__plink">Github <a href="https://github.com/JordanKurtzman/Punk-API-App">repository</a></p>
                            <p className="fadebox__plink">Check it out<a href="https://beer-app-dev-version.netlify.app/">here</a></p>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="portfolio__piece">
                    
                    <div className="portfolio__piece--imgcontainer">
                        <h3>Sample Wordpress Site: Community Art Center</h3>
                        <img className="portfolio__piece--img" src={ArtsCenter} />
                        <div className="fadebox">
                            <p className="fadebox__p">A sample custom WordPress theme based on a WordPress site I built for a client.</p>
                            <p className="fadebox__plink">Github <a href="https://github.com/JordanKurtzman/Arts-Center-WP">repository</a></p>
                            <p className="fadebox__plink">Check it out<a href="http://jkurtzman-wpdemo.com/">here</a></p>
                        </div>
                    </div>
                    

                </div>


            </div>
        </div>
        
    )
    
}

export default Portfolio