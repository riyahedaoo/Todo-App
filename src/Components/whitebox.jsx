import React, { Component } from 'react';
import ToDoList from "./todo";
import icon from "./Assets/Images/check.png"
import "./Assets/style.css";


class WhiteBox extends Component {
    state = {  }
    render() { 
        return (  
            <div className="whitebox">
                <img className="icon" src={icon} alt="" />
                <center><br/>
                <b><h1 className="title">To-Do List</h1></b>
                </center>
                <ToDoList />
            </div>
        );
    }
}
 
export default WhiteBox;