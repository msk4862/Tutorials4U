import React from 'react'
import './css/Home.css'

import Card from './Card'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='container content-grid'>
                    <div className='row'>
                        <div className='col-12 col-sm-4'>
                            <Card 
                                title='Books'
                                img='book.jpg'/>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <Card 
                                title='Question Papers'
                                img='exam.jpg'/>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <Card 
                                title='Notes'
                                img='notes.jpg'/>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <Card 
                                title='Practicals'
                                img='computer.jpg'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home