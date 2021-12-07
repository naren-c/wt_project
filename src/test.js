import React from "react";
import "./land.css";

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            teststate : 0
        }
    }
    render(){
        return(
        <div class="back">
           <h1>Test page</h1>
        </div>)
    }
}