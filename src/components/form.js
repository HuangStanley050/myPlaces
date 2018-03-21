import React from "react";
import "./form.css";
import axios from "axios";
/* global navigator */

//AIzaSyCPP1MmpZ9U5jkWYHGEgOEu1ytNnqYrNTo
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=hungry%jacks&location=-33.87008464,151.20732999&radius=10000&key=AIzaSyCPP1MmpZ9U5jkWYHGEgOEu1ytNnqYrNTo



/*var config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded' },
  crossdomain:true,
  datatype:'jsonp'
};*/
var lat;
var long;

navigator.geolocation.getCurrentPosition(function(position){
            lat=position.coords.latitude;
            long=position.coords.longitude;
        })

class FormFunc extends React.Component{
    constructor(props){
        super(props);
        this.state={
            place:"",
            distance:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleRadio=this.handleRadio.bind(this);
        this.upDate=this.upDate.bind(this);
    }
    handleChange(event){
    
        this.setState({place:event.target.value});
        //alert(event.target.value);
    }
    handleRadio(event){
        //alert(event.target.value);
        this.setState({distance:event.target.value});
        

    }
    async upDate(){
        var radius;
        var location_data=[];
        
        if(this.state.distance==="5k"){
            radius=5000;
        }
        if(this.state.distance==="10k"){
            radius=10000;
        }
        if(this.state.distance==="15k"){
            radius=15000;
        }
        if(this.state.distance==="20k"){
            radius=20000;
        }
        
        const result = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.place}&location=${lat},${long}&radius=${radius}&key=AIzaSyCPP1MmpZ9U5jkWYHGEgOEu1ytNnqYrNTo`)
        .then(function(response){
            //console.log(response); // ex.: { user: 'Your User'}
            console.log(response.status); // ex.: 200
            return response;
        
        });
        //console.log(result.data.results[1]);
        for(var i=0;i<5;i++){
            location_data.push(result.data.results[i]);
        }
        console.log(location_data);
        this.props.update(location_data);
    }
    
    render(){
    return (
        <div className="formWrapper">
        
        <form className="selectradioWrap">
           <select onChange={this.handleChange} className="selectStyle" name="places">
                <option value=""></option>
                <option value="church">Church</option>
                <option value="hungry jack">Hungry Jacks</option>
                <option value="gym">Gym</option>
                <option value="supermarket">SuperMarket</option>
           </select>
           
           <div className="radioWrapper" onChange={this.handleRadio}>
            <input type="radio" name="distance" value="5k" /> 5 kilometers
            <input type="radio" name="distance" value="10k"/> 10 Kilometers
            <input type="radio" name="distance" value="15k"/> 15 kilometers
            <input type="radio" name="distance" value="20k"/> 20 Kilometers
           </div>
           
        </form>  
           
            <button onClick={this.upDate} type="button">Submit</button>
        </div>
        );
    }
};

export default FormFunc;