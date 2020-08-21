import React, { useState } from "react";
import { login } from "../../models/Auth/action";
import { connect } from "react-redux";

const {
    Form,
    FormGroup,
    TextInput,
    TextArea,
    Select,
    SelectItem,
    Button,
} = require("carbon-components-react");

const Login = ({ login }) => {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onLogin = (user) => {
        login(user);
        setUser({ ...user, email: "", username: "", password: "" });
    };

    return (
        <div>
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
                type={showPassword ? "text" : "password"}
                onChange={(event) => handleChange(event)}
            />
            <Button
                variant="outlined"
                color="primary"
                disabled={
                    user.username === "" || user.password === "" ? true : false
                }
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