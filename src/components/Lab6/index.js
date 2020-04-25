import React, {Component}from 'react'
import './style.scss'
import {Link} from 'react-router-dom';
import {p5} from 'p5'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';



class Lab6 extends Component {
    constructor(props) {
      super(props);
     
      this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
      this.randomColor = this.randomColor.bind(this);
        
        
    }
    randomColor(){
      this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]}
      )
    }


    render() {
      return(<div className="content-container"> 
         
            <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
         
         
      </div>)
    
  
    }
  
  
  }



  
  
  export default Lab6
  