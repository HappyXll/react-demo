import React ,{Component} from 'react';

export  default class Parent extends Component{
  state = {
    msg: 'start'
  };
 
  componentDidMount() {
    let i=0;
    setInterval(() => {
      this.setState({
        i:i=i+2,
        msg: 'end'+i,
      });
    }, 1000);
  }

  render() {
    return <Child_1 msg={this.state.msg} />;
  }
}

  export  class Child_1 extends Component{
    render(){
      return <p>{this.props.msg}</p>
    }
  }
