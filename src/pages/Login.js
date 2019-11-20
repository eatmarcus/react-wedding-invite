import React from 'react';
import { Image, TextInput, Form, FormField, Text } from "grommet";
import { NavBar } from "../components"
import bg from '../assets/IMG_43.JPG';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="login-wrapper">
                    <div className="login-title-box">
                        <div className="login-title">
                            The Team
                        </div>
                    </div>
                    <div className="login-box">
                        <div className="form-wrapper">
                            <Form className="login-form" style={{color: 'white'}}>
                                <FormField label={<Text size='small'>Username</Text>} name="username" />
                                <FormField label={<Text size='small'>Password</Text>}>
                                <TextInput
                                    type="password"/>
                                </FormField>
                            </Form>
                        </div>
                    </div>
                </div>
                <NavBar mode="dark"/>
            </div>
        )
    }
}

export default Login;