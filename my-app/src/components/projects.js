import React, {Component} from "react" ;
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions, Button, CardMenu, IconButton, CardText } from  "react-mdl";

class Project extends Component{
    constructor (props) {
        super(props);
        this.state ={activeTab: 0 };
    }
        moveCat(){
            if (this.state.activeTab === 0){
                return(
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/121980093_10164185335940243_4608901160457731939_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=MiPH2WrkWzUAX850k7f&_nc_oc=AQlghYHv1lYIHyJl20Se0U118agcVxRKrKAkNJdjrh7An2gkdSHXIzUdUpByqYXriP5Zob5hF8dKEEGPYKm62DT7&_nc_ht=scontent-ort2-1.xx&oh=acff7ec0ed82e210516960f942742a72&oe=5FAFF0DD) center / cover'}}>Employee Directory</CardTitle>
                    <CardText>
                      React assignment that uses an API to generate random employees. The user is able to filter by alphabetical order and by gender. 
                    </CardText>
                    <CardActions border>
                        <a href= "https://marissa-mayes.github.io/react_directory/">Employe Directory</a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>


                )
            } else if(this.state.activeTab === 1 ){
                return (
                   
                    <Card shadow={0} style={{width: '600px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/121706521_10164185347690243_1231603449245868967_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=5nRIZiizRyAAX-CozIr&_nc_ht=scontent-ort2-1.xx&oh=133934c4a114369a101aadb0918fbb2b&oe=5FADEDA8) center / cover'}}></CardTitle>
                    <CardText>
                    When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

Add exercises to a previous workout plan.

Add new exercises to a new workout plan.
                    </CardText>
                    <CardActions border>
                    <a href="https://sleepy-shelf-97693.herokuapp.com/?id=5f6aaab9e10ad00017a0fe7b" class="heroku">Fitness Tracker</a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>





                   
                   
                   
                  
                )
            }   else if(this.state.activeTab === 2){
                return (
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/121702987_10164185316355243_2337645143182875999_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=4wsNO-NHISoAX-g_X3-&_nc_ht=scontent-ort2-1.xx&oh=041bb6eae0acb9416d89dbea243104a1&oe=5FAF1210) center / cover'}}>Travel in Style</CardTitle>
                    <CardText>
                    Application that was built using Node,Express,JavaScript, JQuery, Ajax, Handlebars, Mysql, Sequelize ORM, Dayjs, and Bootstrap. The user is able to login in and select their gender. Once logged in the user is able to input their desired destination within the United States. Based off user input weather information for the day is presented as well as clothes that match the current weather
                    </CardText>
                    <CardActions border>
                    <a href="https://evening-oasis-14753.herokuapp.com/members" class="heroku">Travel 'N' Style</a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                )
            }
            
        }
    render(){
        return (
           <div className="category-tabs">
             <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})}ripple>
                   <Tab>React</Tab>
                   <Tab>JavaScript</Tab>
                   <Tab>Express</Tab>
                   </Tabs>
                   <section className="projects-grid">
                       <Grid className="projects-grid">
                           <Cell col={12}>
                               <div className="content">{this.moveCat()}</div>

                           </Cell>

                       </Grid>
                   
                   </section>
                   </div>
    
        
        
        )
    }
}
export default Project;