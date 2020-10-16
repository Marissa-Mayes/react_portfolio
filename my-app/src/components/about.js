import React, {Component} from "react" ;
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions, Button, CardMenu, IconButton, CardText } from  "react-mdl";

class About extends Component{
    render(){
        return (
          
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/12466097_10156453653150243_4416963498744279264_o.jpg?_nc_cat=102&_nc_sid=cdbe9c&_nc_ohc=uSdGu91iG0oAX9lL1hr&_nc_ht=scontent-ort2-1.xx&oh=8a33ef1ebedf2a125dda2952d6c4798d&oe=5FB02533 ) center / cover'}}></CardTitle>
    <CardText>
    I am a Chicago land native who grew up in Orland Park IL. I received my BA in Political Science from University of Illinois-Urbana Champaign. Currently I am enrolled in Northwestern Coding Bootcamp with hopes of gaining new skillsets. Outside of continued learning I enjoy traveling and exploring different cuisines.
    </CardText>
    <CardActions border>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>









        )}
}
export default About;