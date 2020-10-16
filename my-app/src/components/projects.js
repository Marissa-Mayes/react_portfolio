import React, {Component} from "react" ;
import {Tabs, Tab} from  "react-mdl";

class Project extends Component{
    constructor (props) {
        super(props);
        this.state ={activeTab: 0 };
    }
        moveCat(){
            if (this.state.activeTab === 0){
                return(
                    <div><h1>React Page</h1></div>
                )
            } else if(this.state.activeTab === 1 ){
                return (
                    <div><h1> JavaScript Page</h1></div>
                )
            }   else if(this.state.activeTab === 2){
                return (
                    <div><h1>Express Page</h1></div>
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
                     {this.moveCat()}
                   </section>
                   </div>
    
        
        
        )
    }
}
export default Project;