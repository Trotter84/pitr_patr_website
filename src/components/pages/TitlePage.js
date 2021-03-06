import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import HouseLogo from '../../images/House Image.png';
import NameLogo from '../../images/LOGO TEXT.png';



class TitlePage extends Component {
  render() {
    return (
      <div id='titlePageContainer'>
        <Link to={'./home'} id='titlePageButton'>
          <img src={HouseLogo} id='houseLogoImage' alt='House Logo'></img>
          <img src={NameLogo} id='nameLogoImage' alt='Name Logo Pitr Patr'></img>
          <h2 id='hiddenText' style={{textDecoration: 'none'}}>Enter the Ag-Hall</h2>
        </Link>
      </div>
    )
  }

}


export default TitlePage;
