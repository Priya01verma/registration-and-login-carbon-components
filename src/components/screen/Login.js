import React, { useState } from "react";
import { login } from "../../models/Auth/action";
import { connect } from "react-redux";

const {
    TextInput,
    Button,
} = require("carbon-components-react");

const Login = ({ login }) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onLogin = (user) => {
        login(user);
        setUser({ ...user, username: "", password: "" });
    };

    return (
        <div style={{padding: 64}}>
            <h1>Login</h1>
            <TextInput
                id="username"
                invalidText="Invalid error message."
                labelText="username"
                type="username"
                name="username"
                value={user.username}
                placeholder="username"
                onChange={(event) => handleChange(event)}
            />
            <TextInput
                id="password"
                variant="outlined"
                labelText="Password"
                value={user.password}
                name="password"
                margin="normal"
                placeholder="password"
                type="password"
                onChange={(event) => handleChange(event)}
            />
            <Button
                variant="outlined"
                color="primary"
                disabled={
                    user.username === "" || user.password === "" ? true : false
                }
                style={{marginTop: 12}}
                onClick={() => onLogin(user)}
            >
                Login
            </Button>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
  });
  
  export default connect(
    mapStateToProps,
    { login }
  )(Login);