import React, {PureComponent} from 'react';
import './styles.css';

class D extends PureComponent {

  render() {
    console.log('C: render')
    return (
      <div className="D">
        {this.props.value1}, {this.props.value2}
      </div>
    );
  }
}

export default D;
