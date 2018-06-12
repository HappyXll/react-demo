/* 观察者模式 也是发布--订阅模式*/

import React,{Component} from 'react'
import eventProxy from './eventProxy'

export default class Parent extends Component{
  render() {
    return (
      <div>
        <Child_1/>
        <Child_2/>
      </div>
    );
  }
}
// componentDidUpdate 与 render 方法与上例一致
class Child_1 extends Component{
  componentDidMount() {
    setTimeout(() => {

      eventProxy.trigger('msg', 'end');
    }, 1000);
    
  }
  render(){
    return(<div></div>)
  }
}

class Child_2 extends Component{
  state = {
    msg: 'start'
  };

  componentDidMount() {
  	// 监听 msg 事件
    eventProxy.on('msg', (msg) => {
      this.setState({
        msg
      });
    });
  }

  render() {
    return <div>
      <p>child_2 component: {this.state.msg}</p>
   
    </div>
  }
}

