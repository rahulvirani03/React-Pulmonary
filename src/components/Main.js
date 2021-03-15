import '../styles/Main.css';
import React from 'react';
import Sanitize from '../assets/image/sanitize.webp';
import SocialDist from '../assets/image/social_distancing.png';
import Mask from '../assets/image/mask.webp';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {useHistory} from 'react-router-dom';

function Main(){
    let history = useHistory();
    const redirect = () => {
        history.push('/CovidApp')
      }
    return(
        <div className="Main">
                <div className="Heading">
                    Welcome
                </div>
                <img src={Sanitize} className="imgs" align="left"></img>
                <img src={SocialDist} className="imgs" align="center"></img>
                <img src={Mask} className="imgs" align="right"></img>
                <br/>
                <span className="spantext">Make sure to sanitize, maintain social distance and wear mask, for your own safety</span>
                <br/>
                <Button variant="outlined" className="btn1" endIcon={<ArrowRightAltIcon />} onClick={redirect}>Get Started</Button>
        </div>
    );
}
export default Main;