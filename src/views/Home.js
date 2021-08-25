import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-12">I'm home</div>
                <Link to="/login">Login</Link>
            </div>
        </section>
    )
}

export default Home;