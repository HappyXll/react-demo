import React ,{Component} from 'react';

export default class Parent extends Component{
   state={
     msg:"start"
   };
   transferMsg(msg){
     this.setState({
       msg
     });
   }
  render(){
    return(<div>
      <p>child msg:{this.state.msg}</p>
      <Child_2 transferMsg={msg=>this.transferMsg(msg)}/>
    </div>)
  }
}

class Child_2 extends Component{
  componentDidMount(){
    setTimeout(()=>{
      this.props.transferMsg('end')
    },1000);
  }
  render(){
    return (<div>父组件通过props向子组件传递一个函数，在子函数中给这个函数传递一个参数，然后就会就会调用父组件中的函数</div>)
  }
}