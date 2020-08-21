import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import { useDispatch } from "react-redux";
import { LOGIN_CHECK } from "../models/Auth/types";
//import Login from "./screen/Login";
import Signup from "./screen/Signup";

const Navigatepage = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
      if (localStorage.getItem("login")) {
        dispatch({
          type: LOGIN_CHECK
        });
      }
    }, []);
    
    return (
        <Fragment>
            <Switch>
                    <Route exact path="/" component={Homepage} />
                    {/* <Route exact path ='/login' component ={Login} /> */}
                    <Route exact path="/signup" component={Signup} />
                </Switch>
        </Fragment>
    );
};
export default Navigatepage;
