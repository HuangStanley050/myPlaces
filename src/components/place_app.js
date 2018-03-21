import React from "react";
import "./place_app.css";
import FormFunc from "./form.js";
import Container from "./container.js";

export default class PlaceApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        
           
        }
        this.getData=this.getData.bind(this);
    }
    getData(locations){
       this.setState({data:locations});
    }
    /*componentDidUpdate(){
        alert(this.state.data[0].name);
    }*/
        
    
    render(){
        var stuff;
        if(this.state.data){
            stuff=this.state.data;;
        }
        
        return (
                <div className="appWrapper">
                    <FormFunc update={this.getData} />
                    <Container data={stuff} />
                </div>
            );
        
    }
    
}