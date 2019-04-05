import React, {Component} from 'react';
import './styles.css';
import B from "./B";
import C from "./C";

class A extends Component {
  render() {
    return (
      <div className="A">
        <B value1={'b1'} value2={'b2'}/>
        <C value1={'c2'} value2={'c2'}/>
      </div>
    );
  }
}

export default A;
