import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('commonStore')
@observer
export default class Info extends React.PureComponent {

  render() {
    const { info } = this.props.commonStore;
    return (<div>
      {info.count}
    </div>);
  }
}
