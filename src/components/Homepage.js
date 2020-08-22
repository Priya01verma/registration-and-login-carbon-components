import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ModalWrapper } from "carbon-components-react";
import Login from "./screen/Login";
import Signup from "./screen/Signup";

const Homepage = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to="/logout" />;
    }

    const bannerStyle = {
        position: "absolute",
        top: "30%",
        textAlign: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
    };

    return (
        <div style={{ position: "relative" }}>
            <img
                src="https://cdn2.f-cdn.com/contestentries/1490804/32875450/5cbfe247369ee_thumb900.jpg"
                alt="favourtie"
                width="100%"
                height="600px"
            />
            <div style={bannerStyle}>
                <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                    <div style={{marginRight : 20}}>
                        <ModalWrapper
                            passiveModal
                            size="md"
                            buttonTriggerText="Login"
                            modalHeading="Login"
                        >
                            <Login />
                        </ModalWrapper>
                    </div>
                    <div>
                        <ModalWrapper
                            passiveModal
                            size="md"
                            buttonTriggerText="Sign Up"
                            modalHeading="Sign Up"
                        >
                            <Signup />
                        </ModalWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(Homepage);
