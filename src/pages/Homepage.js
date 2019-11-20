import React from 'react';
import { Box, Image, TextInput, Button } from "grommet";
import bgOne from '../assets/IMG_134.JPG';
import { NavBar } from '../components';

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
                    {/* <Image fit="cover" src={bgOne}/> */}
                    <div className="bg">
                    
                    </div>
                </div>
                <div className="Welcome">
                    <Box align="center" pad="large" alignContent="center">
                        {/* <span className="Header"><strong>MARCUS & TIFFANIE'S</strong></span>
                        <span className="Header"><strong>WEDDING CELEBRATIONS</strong></span>
                        <span className="Header-date"><strong>01/11/2020</strong></span> */}
                        <span className="Header">The Event</span>
                        <div className="rsvp-form">
                            <span className="Header-rsvp">RSVP Code:</span>
                            <TextInput 
                                id="rsvpCode" 
                                size="small" 
                                style={{marginBottom: "5px"}} 
                                value={this.state.rsvpCode}
                                onChange={this.onInputChange}/>
                            <Button
                                label="Submit"
                                color="#FFFFFF"
                                style={{float: "right", border: "1px solid #FFFFFF"}}
                                disabled={this.state.rsvpCode===""}
                                onClick={()=>{
                                    //submit
                                    alert(this.state.rsvpCode);
                                }}/>
                        </div>
                    </Box>
                </div>
                <NavBar />
            </div>
        )
    }
}

export default Homepage;