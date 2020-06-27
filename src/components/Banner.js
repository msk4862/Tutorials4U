import React from 'react'

import "../styles/banner.scss";
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="banner">
            <div className='container-fluid'>
                <div className="row align-items-center justify-centent-around">
                    <div className="col-12 col-sm-6 row justify-content-center text-dark-color">
                        <div className="col-12 col-sm-8">
                            <h1 className="mb-3">We create customer-first digital experiences</h1>
                            <p>
                                <Link className="btn btn-gradient" to="/">Learn More</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 row justify-content-center">
                        <img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" alt="banner-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;