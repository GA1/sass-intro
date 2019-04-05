import React, {Component} from 'react';
import './styles.css';

class B extends Component {
  render() {
    return (
      <div className="B">
        {this.props.value1}, {this.props.value2}
      </div>
    );
  }
}

export default B;
