import React from 'react'
import { Link } from 'react-router-dom'

import './css/Card.css'

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src="../../../img/exam.jpg" alt={props.title}/>
            <div className="card-body">
                    <h4 className="card-title"><Link to='/'>{props.title}</Link></h4>
            </div>
        </div>

    )
}

export default Card