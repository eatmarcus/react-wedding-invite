import React from 'react';
import { Box, Image, TextInput, Button } from "grommet";
import bgOne from '../assets/IMG_63a.JPG';
import bgTwo from '../assets/IMG_38_edited.jpg';
import bgThree from '../assets/IMG_43.JPG';
import bgFour from '../assets/IMG_77.JPG';
import bgFive from '../assets/IMG_134.JPG';

class Homepage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                 <div className="Wrapper">
                    {/* <Carousel fill controls={false} play={15000}> */}
                        {/* <Image fit="cover" src={bgOne} opacity={"medium"}/> */}
                        <Image fit="cover" src={bgFive}/>
                        {/* <Image fit="cover" src={bgTwo} opacity={"strong"}/> */}
                        {/* <Image fit="cover" src={bgThree} opacity={"strong"}/> */}
                        {/* <Image fit="cover" src={bgFour} opacity={"strong"}/> */}
                    {/* </Carousel> */}
                </div>
                <div className="Welcome">
                    <Box align="center" pad="large" alignContent="center">
                        <span className="Header">MARCUS & TIFFANIE'S</span>
                        <span className="Header">WEDDING CELEBRATIONS</span>
                        <span className="Header-date">01/11/2020</span>
                        <div className="rsvp-form">
                            <span className="Header-rsvp">RSVP Code:</span>
                            <TextInput size="small"/>
                            <Button />
                        </div>
                    </Box>
                </div>
                {/* <div className="Rsvp">
                    <Box align="center" pad="none" alignContent="center" alignSelf="end">
                      <TextInput />
                    </Box>
                </div> */}
            </div>
        )
    }
}

export default Homepage;