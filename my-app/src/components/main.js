import React from "react";
import {Switch, Route} from "react-router-dom";
import homePage from "./homepage";

const Main = () => (
    <Switch>
        <Route exact path="/" component={homePage}/>
        
    </Switch>
)
export default Main;