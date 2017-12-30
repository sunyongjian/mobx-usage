import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('commonStore')
@observer
export default class Count extends React.PureComponent {

  render() {
    const { decreaseCount, increaseCount } = this.props.commonStore;
    return (<div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => increaseCount()}
      >
        +
      </div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => decreaseCount()}
      >
        -
      </div>
    </div>);
  }
}
