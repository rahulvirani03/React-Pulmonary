import '../styles/Main.css';
import React from 'react';
import Sanitize from '../assets/image/sanitize.webp';
import SocialDist from '../assets/image/social_distancing.png';
import Mask from '../assets/image/mask.webp';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import Carousel from 'react-bootstrap/Carousel'


function Main(){
    const history = useHistory();
    return(
        // <div className="Main">
        //         <div className="Heading">
        //             Welcome
        //         </div>
        //         <img src={Sanitize} className="imgs" align="left"></img>
        //         <img src={SocialDist} className="imgs" align="center"></img>
        //         <img src={Mask} className="imgs" align="right"></img>
        //         <br/>
        //         <span className="animation">
        //             <span className="spantext">Make sure to sanitize, maintain social distance and wear mask, for your own safety</span>
        //             <br/>
        //             <Button variant="outlined" className="btn1" endIcon={<ArrowRightAltIcon />} style={{margin:"1em"}} onClick = 
        //             {() =>
        //             history.push({
        //                 pathname:'/Home',
        //             })}>Get Started</Button>
        //         </span>
        // </div>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Sanitize}
                alt="First slide"
                className="imgs"
                />
                <Carousel.Caption className="carouselText">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={SocialDist}
                alt="Second slide"
                className="imgs"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Mask}
                alt="Third slide"
                className="imgs"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    );
}
export default Main;