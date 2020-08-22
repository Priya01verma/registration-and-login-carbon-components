import React from "react";
import { Button } from "carbon-components-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../models/Auth/types";

const Logout = () => {
    
    const dispatch = useDispatch();

    return (
        <div style={{padding: 64}}>
            Welcome User Login......Checkout Logout screen
            <div style={{ marginTop: 12 }}>
                <Link style={{textDecoration : 'unset'}} exact to="/" onClick={() => dispatch({ type: LOGOUT })}>
                    <Button kind="danger">Logout</Button>
                </Link>
            </div>
        </div>
    );
};
export default Logout;
