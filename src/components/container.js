import React from "react";
import "./container.css";

var list=[];
class Container extends React.Component{
    
    componentWillReceiveProps(nextProps){
        for(var i=0;i<5;i++){
            list.push(<li>Name:{nextProps.data[i].name}--->Address:{nextProps.data[i].formatted_address}</li>);
        }
    }
    componentDidUpdate(){
        list=[];
    }
    render(){
        
        console.log(list);
        return (
            <div className="containWrapper">
            <ul>
                {list}
            </ul>
            
            </div>
            );
    }
}

export default Container;