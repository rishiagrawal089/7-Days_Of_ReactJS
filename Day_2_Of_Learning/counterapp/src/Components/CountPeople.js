import React,{ Component } from "react";
import '../index.css';

export class CountPeople extends Component{
    constructor(props){
        super(props);

        this.state={
            entrycount:0,
            exitcount:0
        };
    }

    UpdateEntry=()=>
    {
        this.setState((prevState,props)=>{
            return {entrycount:prevState.entrycount+1}
        });
    }
    UpdateExit=()=>
    {
        this.setState((prevState,props)=>{
            return {exitcount:prevState.exitcount+1}
        });
    }

    render()
    {
        return(
            <div>
                <button type="button" onClick={this.UpdateEntry}>Login</button> <span>{this.state.entrycount} People Entered!!!!                </span>
                <button type="button" onClick={this.UpdateExit}>Exit</button> <span>{this.state.exitcount}People Left!!!!</span>
            </div>
        );
    }
}