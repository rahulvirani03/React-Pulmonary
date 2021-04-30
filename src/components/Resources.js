import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Corona1 from '../assets/image/corona1.jpeg'
import Corona2 from '../assets/image/corona2.jpeg'
import Corona3 from '../assets/image/corona3.jpeg'
import Corona4 from '../assets/image/corona4.jpeg'

import '../styles/GuideCard.css'

function StateCard(props) {
    var docs
    var i;
    var states=[
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Puducherry"]
    
    
        docs=[
            {
                image:Corona1,
                title:states[0],
                link:'https://life.coronasafe.network/andhra_pradesh'
            },
            {
                image:Corona1,
                title:states[1],
                link:'https://life.coronasafe.network/arunachal_pradesh'
            },
            {
                image:Corona1,
                title:states[2],
                link:'https://life.coronasafe.network/assam'
            },
            {
                image:Corona1,
                title:states[3],
                link:'https://life.coronasafe.network/bihar'
            },
            {
                image:Corona1,
                title:states[4],
                link:'https://life.coronasafe.network/chhattisgarh'
            },
            {
                image:Corona1,
                title:states[5],
                link:'https://life.coronasafe.network/goa'
            }, {
                image:Corona1,
                title:states[6],
                link:'https://life.coronasafe.network/gujarat'
            }
            , {
                image:Corona1,
                title:states[7],
                link:'https://life.coronasafe.network/haryana'
            }, {
                image:Corona1,
                title:states[8],
                link:'https://life.coronasafe.network/himachal_pradesh'
            },
            {
                image:Corona1,
                title:states[9],
                link:'https://life.coronasafe.network/jammu_&_kashmir_(ut)'
            },
            {
                image:Corona1,
                title:states[10],
                link:'https://life.coronasafe.network/jharkhand'
            },
            {
                image:Corona1,
                title:states[11],
                link:'https://life.coronasafe.network/karnataka'
            },
            {
                image:Corona1,
                title:states[12],
                link:'https://life.coronasafe.network/kerala'
            },
            {
                image:Corona1,
                title:states[13],
                link:'https://life.coronasafe.network/madhya_pradesh'
            },
            {
                image:Corona1,
                title:states[14],
                link:'https://life.coronasafe.network/maharashtra'
            },
            {
                image:Corona1,
                title:states[15],
                link:'https://life.coronasafe.network/manipur'
            },
            {
                image:Corona1,
                title:states[16],
                link:'https://life.coronasafe.network/meghalaya'
            },
            {
                image:Corona1,
                title:states[17],
                link:'https://life.coronasafe.network/nagaland'
            },
            {
                image:Corona1,
                title:states[18],
                link:'https://life.coronasafe.network/odisha'
                
            },
            {
                image:Corona1,
                title:states[19],
                link:'https://life.coronasafe.network/punjab'
             
            },
            {
                image:Corona1,
                title:states[20],
                link:'https://life.coronasafe.network/rajasthan'
            },
            {
                image:Corona1,
                title:states[21],
                link:'https://life.coronasafe.network/sikkim'
            }, {
                image:Corona1,
                title:states[22],
                link:'https://life.coronasafe.network/tamil_nadu'
            },
            {
                image:Corona1,
                title:states[23],
                link:'https://life.coronasafe.network/telangana'
            }, {
                image:Corona1,
                title:states[24],
                link:'https://life.coronasafe.network/tripura'
            },
            {
                image:Corona1,
                title:states[25],
                link:'https://life.coronasafe.network/uttarakhand'
            },
            {
                image:Corona1,
                title:states[26],
                link:'https://life.coronasafe.network/uttar_pradesh'
            },
            {
                image:Corona1,
                title:states[27],
                link:'https://life.coronasafe.network/uttarakhand'
            },
            {
                image:Corona1,
                title:states[28],
                link:'https://life.coronasafe.network/west_bengal'
            },
            {
                image:Corona1,
                title:states[29],
                link:'https://life.coronasafe.network/andaman_and_nicobar_islands_(ut)'
            },
            , {
                image:Corona1,
                title:states[30],
                link:'https://life.coronasafe.network/chandigarh_(ut)'
            },
            {
                image:Corona1,
                title:states[31],
                link:'https://life.coronasafe.network/dadra_and_nagar_haveli_and_daman_&_diu_(ut)'
            },
            {
                image:Corona1,
                title:states[32],
                link:'https://life.coronasafe.network/delhi_(nct)'
            },
            {
                image:Corona1,
                title:states[33],
                link:'https://life.coronasafe.network/puducherry_(ut)'
            }
            
        
        ]
    
  
        
    return (
        <div>
            <div className='grid'>
                {docs && docs.map(doc => (
                        <Card style={{ width: '22rem' }} className='box'>
                            <Card.Img variant="top" src={doc.image}className='boximg'/>
                                <Card.Body>
                                <center>
                                    <Card.Title>
                                        {doc.title}
                                    </Card.Title>
                                </center>
                                <hr/>
                                <center><Button className="btn1" variant="outlined"  href={doc.link} target="__blank" type="submit">Show Resources</Button></center>
                            </Card.Body>
                        </Card>
                        ))}     
            </div>
        </div>
    );
}

export default StateCard;