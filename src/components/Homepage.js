import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "carbon-components-react";
//import Login from "./screen/Login";
import Signup from "./screen/Signup";

const Homepage = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <img
                src="https://cdn2.f-cdn.com/contestentries/1490804/32875450/5cbfe247369ee_thumb900.jpg"
                alt="favourtie"
                width="100%"
            />
            <div>
                {/* <div>
          <Button
            kind="primary"
            style={{ marginBottom: 30 }}
          >
            Login
          </Button>
              <Login />
        </div> */}

                <div>
                    <Link to="/signup">
                        <Button variant="contained">SignUp</Button>
                        <Signup />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(Homepage);
