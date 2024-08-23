import React from "react"
import { CurrencyConvertor } from "./CurrencyConvertor";

export default class EventButton extends React.Component{
    constructor(){
        super();
        this.state={count:0};
    }

    handleIncrement=()=>{
        this.setState((state)=>{
            return {count:state.count+1};
        })
        alert("Hello!! Member....");
    }
    
    handleDecrement=()=>{
        this.setState((state)=>{
            return {count:state.count-1};
        })
    }
    welcomeMsg=()=>{
        alert("Welcome   ");
    }
    clickMe=()=>{
        alert("I was Clicked");
    }
    render(){
        return(
            <div>
                <div>
                    {this.state.count};<br/>
                    <button type="button" onClick={this.handleIncrement}>Increment</button><br/>
                    <button type="button" onClick={this.handleDecrement}>Decrement</button><br/>
                    <button type="button" onClick={this.welcomeMsg}>Say Welcome</button> <br/>
                    <button type="button" onPress={this.clickMe}>Click on me</button><br/>
                </div>

                <div>
                    <CurrencyConvertor/>
                </div>
            </div>
        )
    }
}