import React, { useRef } from 'react';
import { Box, Image, TextInput, Button } from "grommet";
import bgOne from '../assets/IMG_134.JPG';
import { NavBar } from '../components';

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            rsvpCode: "",
            currentSongUrl: "/yam.mp3"
        }

        // this.yam = new Audio("/yam.mp3");
        // this.seng = new Audio("/seng.mp3")
    }

    onInputChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value.toUpperCase()
        })
    }

    onPress = () => {
        this.setState({currentSongUrl: "/yam.mp3"}, () =>{
            this.audioRef.play();
        })
    }

    onRelease = () => {
        this.audioRef.pause();
        this.setState({currentSongUrl: "/seng.mp3"}, ()=>{
            this.audioRef.load();
            this.audioRef.play();
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
                        {/* <div className="rsvp-form">
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
                        </div> */}
                        <div className="rsvp-form" id="yamseng" onPointerDown={this.onPress} onPointerUp={this.onRelease}>
                            <span className="Header-rsvp">Press to YAM SENG</span>
                            <audio ref={(input) => {this.audioRef = input}} src={this.state.currentSongUrl} style={{ display: 'none' }} />
                        </div>
                    </Box>
                </div>
                <NavBar />
            </div>
        )
    }
}

export default Homepage;