import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('commonStore')
@observer
export default class Info extends React.PureComponent {

  componentDidMount() {
    setTimeout(() => {
      this.props.commonStore.deepChange();
    }, 2000);
  }

  render() {
    const { info } = this.props.commonStore;
    return (<div>
      {info.count}
      <div>a.b.c = {info.a.b.c}</div>
    </div>);
  }
}
