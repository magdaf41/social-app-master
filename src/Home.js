import React from 'react';
import Feed from './Feed';
import Popup from './Popup';

import './Home.css';



function Home (props) {
    return (
        <div className='home'>
            <Feed />
            <Popup />
        </div>
    )
}

export default Home;