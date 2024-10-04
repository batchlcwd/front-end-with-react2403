import React from "react";

export default class Jalebi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jalebi",
    };
    console.log("Jalebi constructor");
  }

  componentDidMount() {
    console.log("Jalebi componentDidMount");

    setTimeout(() => {
      this.setState({
        name: "Imarti",
      });
    }, 5000);
  }
  componentDidUpdate() {
    console.log("Jalebi componentDidUpdate");
  }

  

  componentWillUnmount(){
    console.log("Jalebi componentWillUnmount");
  }

  render() {
    return (
      <div className="p-10">
        <h1 className="text-5xl">Class Based Example</h1>
        <p>This is a class based component.</p>
        <h1 className="text-3xl">{this.state.name}</h1>
      </div>
    );
  }
}
