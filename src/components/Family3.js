import React,{Component} from 'react'
/* 兄弟组件之间的通信，父组件传一个函数到childd_1组件，满足一定条件后，childd_1组件传不同的参数到这个函数中，然后Child_2传递父组件的 this.state */
 export default class Parent extends Component{
   state={
     msg:'start'
   }
   
   transferMeg(msg){
     this.setState({
       msg
     });
   }

   componentDidUpdate(){
     console.log("Parent update")
   }

   render(){
     return(
       <div>
         <Child_1 transferMsg={msg=> this.transferMeg(msg)}/>
         <Child_2 msg={this.state.msg}/>
       </div>
     )
   }

}
class Child_1 extends Component{
  componentDidMount(){
    setTimeout(()=>{
      this.props.transferMsg("ahaha");
    },1000);
  }
  componentDidUpdate(){
    console.log('Child_1 update') ;
  }
  
  render(){
    return(<div>
      <p> child_1 Component</p>
    </div>)
  }
}

class Child_2 extends Component{
    componentDidUpdate(){
      console.log('Child_2 update')
    }
    render(){
    return( <div>
        <p>{this.props.msg}</p>
      </div>) 
    }

}