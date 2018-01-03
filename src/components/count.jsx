import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';

@inject('commonStore')
@observer
export default class Count extends React.PureComponent {

  render() {
    const { decreaseCount, increaseCount } = this.props.commonStore;
    return (<div>
      操作组件 count：
      <Button
        onClick={() => increaseCount()}
      >
        +
      </Button>
      <Button
        onClick={() => decreaseCount()}
      >
        -
      </Button>
    </div>);
  }
}
