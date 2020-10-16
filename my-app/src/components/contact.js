import React, {Component} from "react" ;
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions, Button, CardMenu, IconButton, CardText } from  "react-mdl";

class Contact extends Component{
    render(){
        return (
           
<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Contact Me</CardTitle>
    <CardText>
      Please contact me via Github or LinkedIn
    </CardText>
    <CardActions border>
       {/* LinkedIn*/}
       <a href="https://www.linkedin.com/in/marissa-mayes/" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                         {/* Github*/}
                         <a href="https://github.com/Marissa-Mayes" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-github-square"  aria-hidden="true" />
                        </a>
    </CardActions>
</Card>






        )}
}
export default Contact;