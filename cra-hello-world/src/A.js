import React, {Component} from 'react';
import './styles.css';
import B from "./B";
import C from "./C";

class A extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      value: 'a'
    }
  }

  handleClick() {
    console.log('click A')
    this.setState({
      a: 'a1'
    })
  }

  render() {
    console.log('render A')
    return (
      <div className="A" onClick={this.handleClick}>
        <B value1={'b1'} value2={'b2'}/>
        <C value1={'c2'} value2={'c2'}/>
      </div>
    );
  }
}

export default A;
