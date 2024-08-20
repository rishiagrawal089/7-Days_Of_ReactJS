import { Component } from "react";
import '../index.css';
class Posts extends Component{
    constructor(props){
        super(props);
        this.state={
            post:[],
            errorFound:false
        }; 
    }
    
    loadPosts(){
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((json)=>{
            this.setState({
                post:json
            });
        })
    }
    componentDidMount(){
        this.loadPosts();
    }
    render()
    {
        if(this.state.errorFound)
        {
            return null;
        }
        else{
        return(
            <div>
                {
                    this.state.post.map((res)=>(
                        <ul key={res.id}>
                            <h1>{res.title}</h1>
                            <p>{res.body}</p>
                        </ul>
                    ))
                }
            </div>
        );}
    }
    componentDidCatch(error,info)
    {
        this.setState({errorFound:true});
        alert("Error :- "+error+"     Info :- "+info);
    }
}
export default Posts;