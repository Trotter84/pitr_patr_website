import React, { Component } from 'react';
import '../App.css';

import HomePageImage from '../../images/HomePageTitle.jpg'

class Home extends Component {
  render() {
    return(
      <>
        <div id='homeContainer'>
          <img src={HomePageImage} id='homePageImage' className='fade-In' alt='PitrPatr logo' />
        </div>
        <div id='homeBodyContainer'>
          <div id='gridContainer'>
            <h1 className='title body-Fade'>New Music</h1>
            <h1 className='title body-Fade'>Social</h1>
            <h1 className='title body-Fade'>Updates</h1>
            <h1 className='title body-Fade'>Store/Commuinity Feed</h1>
          </div>
        </div>
      </>
    )
  }
}

export default Home;
