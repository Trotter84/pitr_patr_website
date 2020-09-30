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
            <div className='bottom-line'>
              <h1 className='title body-Fade'>New Music</h1>
              <div id='soundCloudLink'>
                <iframe width="530px" height="310px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/886042678&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}>
                  <a href="https://soundcloud.com/itspitrpatr" title="PITRPATR" target="_blank" style={{ color: '#cccccc', textDecoration: 'none'}}>
                    PITRPATR
                  </a>
                  <a href="https://soundcloud.com/itspitrpatr/sometimes-too-high" title="Sometimes Too High" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>
                    Sometimes Too High
                  </a>
                </div>
              </div>
            </div>
            <div className='box-top-bottom bottom-line'>
              <h1 className=' box-left-right title body-Fade'>Social</h1>
            </div>
            <div className='bottom-line'>
              <h1 className='title body-Fade'>Updates</h1>
            </div>
            <div className='bottom-line'>
              <h1 className='title body-Fade'>Store/Commuinity Feed</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className='title'>Contact</h1>
        </div>
      </>
    )
  }
}

export default Home;
