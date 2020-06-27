import React from 'react'

import "../styles/base.scss";
import Banner from "./Banner";

class Home extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <h1>Home</h1>    
            </>
        )
    }
}

export default Home