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
    console.log(info.a.b.c, 'info.a.b.c');
    return (<div>展示组件 info：{info.count}</div>);
  }
}
