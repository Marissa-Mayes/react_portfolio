import React from "react";
import {Switch, Route} from "react-router-dom";
import homePage from "./homepage";
import AboutMe from "./about";
import Projects from "./projects";
import Contact from "./contact";

const Main = () => (
    <Switch>
        <Route exact path="/" component={homePage}/>
        <Route  path="/about" component={AboutMe}/>
        <Route  path="/projects" component={Projects}/>
        <Route  path="/contact" component={Contact}/>
    </Switch>
)
export default Main;