import React, { Component } from 'react';
import { connect } from 'react-redux'

class dd extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
          <div>{this.props.v2}</div>
			)
	}
}
const mapStateToProps=(state)=>{
  
  return {v2:state}
}
const Dd=connect(mapStateToProps)(dd)
export default Dd