import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import { useDispatch } from "react-redux";
import { LOGIN_CHECK } from "../models/Auth/types";
import Logout from "./screen/Logout";

const Navigatepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
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
                    <Route exact path="/logout" component={Logout} />
                </Switch>
        </Fragment>
    );
};
export default Navigatepage;
