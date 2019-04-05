import React, {Component} from 'react';
import './styles.css';

class B extends Component {

  shouldComponentUpdate(nextProps) {
    const result = this.props.value1 !== nextProps.value1 || this.props.value2 !== nextProps.value2;
    console.log('B: shouldComponentUpdate: ' + result)
    return result
  }

  render() {
    console.log('B: render')
    return (
      <div className="B">
        {this.props.value1}, {this.props.value2}
      </div>
    );
  }
}

export default B;
