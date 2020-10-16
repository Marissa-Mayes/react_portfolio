import React, { Component } from "react" ;
import {Grid, Cell} from "react-mdl";

class Home extends Component{
    render(){
        return (
            <div style={{width:"100%", margin:"auto"}}>
                <Grid className="home-grid">
                   <Cell col={12}></Cell> 
                   <img src= "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/189994_10150427912255243_4861626_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=0rc5IZ4xYX0AX_U4mlV&_nc_ht=scontent-ort2-1.xx&oh=0d67e6985bbd80d472a675aa52036808&oe=5FAD4DE4"
                   alt= "my picture"
                   className= "my-img"
                   
                   />
                </Grid>
             
            </div>
        )
    }
}
export default Home;