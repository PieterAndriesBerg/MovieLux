import "./Home.css"
import React from 'react'
import {Link} from "react-router-dom"

//assets
import popcorn from "../../Assets/popcorn-img.png"


const Home = () => {
  return (
    <main className="main-wrapper">
        <div className="text-wrapper">
            <h1 className="text-header">Discover movies <br/>and tv-shows</h1>
            <p className="text-p">Search movies and tv-shows with one click.</p>
            <Link to="/signup"><button className="join-button">Join Now!</button></Link>
        </div>
        <img className="popcorn-img" src={popcorn} alt="popcorn"/>
    </main>
  )
}

export default Home