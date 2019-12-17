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
                            <Card title='Books' />
                        </div>
                        <div className='col-12 col-sm-4'>
                            <Card title='Question Papers'/>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <Card title='Notes'/>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <Card title='Practicals'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home