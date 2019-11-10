import React from 'react';
import { Box, Image, TextInput, Button } from "grommet";
import { FormNextLink } from "grommet-icons";
import bgOne from '../assets/IMG_134.JPG';

class Homepage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            rsvpCode: ""
        }
    }

    onInputChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value.toUpperCase()
        })
    }

    render(){
        return(
            <div>
                 <div className="Wrapper">
                    <Image fit="cover" src={bgOne}/>
                </div>
                <div className="Welcome">
                    <Box align="center" pad="large" alignContent="center">
                        <span className="Header">MARCUS & TIFFANIE'S</span>
                        <span className="Header">WEDDING CELEBRATIONS</span>
                        <span className="Header-date">01/11/2020</span>
                        <div className="rsvp-form">
                            <span className="Header-rsvp">RSVP Code:</span>
                            <TextInput id="rsvpCode" size="small" style={{marginBottom: "5px"}} onChange={this.onInputChange}/>
                            <Button
                                label="Submit"
                                color="#FFFFFF"
                                style={{float: "right", border: "1px solid #FFFFFF"}}
                                onClick={()=>{
                                    //submit
                                    alert(this.state.rsvpCode);
                                }}/>
                        </div>
                    </Box>
                </div>
            </div>
        )
    }
}

export default Homepage;