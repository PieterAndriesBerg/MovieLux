import "./Discover.css";


//components
import Footer from "../../Components/Footer/Footer"

// assets
import popular from "../../Assets/feature-popular.svg";
import trailers from "../../Assets/feature-trailers.svg";
import releases from "../../Assets/feature-releases.svg";
import plot from "../../Assets/feature-plot.svg";
import movie from "../../Assets/Movies.png"




import React from 'react'

const Discover = () => {
  return (
      <>
        <section className="main-wrap">
            <div className="feature-content-wrapper">
                <h1>Discover new movies</h1>
                <div className="feature-cards-wrapper">
                        <div className="feature-card feature-card-popular"><img className="popular" src={popular} alt="popular"/><p>Popular</p></div>
                        <div className="feature-card feature-card-trailers"><img src={trailers} alt="popular"/><p>Trailers</p></div>
                        <div className="feature-card feature-card-releases"><img src={releases} alt="popular"/><p>Releases</p></div>
                        <div className="feature-card feature-card-plot"><img src={plot} alt="popular"/><p>Plot</p></div>
                </div>
                <p>By joining you will never miss out on your new favorite movie or tv-show.<br/>Watch trailers and find if the plot suits your style.</p>
            </div>
            <img src={movie} alt="movie"/>
        </section>
        <Footer /> //TODO: CREATE FOOTER AND STYLE IT!
    </>
  )
}

export default Discover