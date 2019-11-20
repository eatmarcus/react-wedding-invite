import React from 'react';
import { Image } from "grommet";
import { NavBar } from "../components";
import bg from '../assets/IMG_77.JPG';

class About extends React.Component {
    constructor(props){
        super(props);

        this.state={
            username: "",
            password: ""
        }
    }

    onInputChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        return(
            <div>
                 <div className="Wrapper">
                    <Image fit="cover" src={bg}/>
                </div>
                <NavBar />
            </div>
        )
    }
}

export default About;