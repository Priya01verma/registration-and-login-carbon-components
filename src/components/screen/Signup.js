import React, { useState } from "react";
import { signup } from "../../models/Auth/action";
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


const Signup = ({ signup, isAuthenticated, inline }) => {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSignup = (user) => {
        if (user.email.length === 0 && user.username.length === 0 && user.password.length === 0) {
            alert("Kindly Add Data")
        }
        else {
            signup(user);
            setUser({ ...user, email: "", username: "", password: "" });   
        }
    };
      
    return (
        <div>
            <h2>Registration Form</h2>
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
                id="email"
                invalidText="Invalid error message."
                labelText="email"
                type="email"
                email="email"
                name="email"
                value={user.email}
                placeholder="email"
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
                kind="primary"
                onClick={() => onSignup(user)}
                style={{marginTop: 12}}
            >
                Submit
            </Button>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
});
  
export default  connect(
    mapStateToProps,
    { signup }
  )(Signup);
