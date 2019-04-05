import React, {Component} from 'react';
import './styles.css';

class C extends Component {
  render() {
    return (
      <div className="C">
        {this.props.value1}, {this.props.value2}
      </div>
    );
  }
}

export default C;
