import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.state={
        }
    }

    onLoginClick=()=>{
        this.props.history.push("/login");
    }

    onAboutClick=()=>{
        this.props.history.push("/about");
    }

    onHomeClick=()=>{
        this.props.history.push("/");
    }

    render(){
        const mode = this.props.mode;
        return(
            <div className="Navbar-wrapper">
                <div className="link-wrapper">
                    <span className={mode==="dark" ? 'navbar-link-dark' : 'navbar-link'} onClick={this.onHomeClick}>
                        Home
                    </span>
                    <span className={mode==="dark" ? 'navbar-link-dark' : 'navbar-link'} onClick={this.onAboutClick}>
                        About
                    </span>
                    <span className={mode==="dark" ? 'navbar-link-dark' : 'navbar-link'} onClick={this.onLoginClick}>
                        Login
                    </span>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar);