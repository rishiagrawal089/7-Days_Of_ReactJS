import React from "react";

class GetUser extends React.Component {
  constructor() {
    super();
    this.state = { name: {}, picture: {} };
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ name: data.results[0].name });
    this.setState({ picture: data.results[0].picture });
  }
  render() {
    return (
      <div style={{marginLeft:300,marginTop:200}}>
        <h1>
          {this.state.name.title}. {this.state.name.first}{" "}
        </h1>

        <img src={this.state.picture.large} alt="demo"></img>
      </div>
    );
  }
}
export default GetUser;
