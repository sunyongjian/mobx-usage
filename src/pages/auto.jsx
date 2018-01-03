import React from 'react';
import { observable, action, autorun, when } from 'mobx';
import { notification, Button } from 'antd';

export default class Auto extends React.Component {

  @observable isError = false;

  @action handleClick = () => {
    this.isError = !this.isError;
  };

  componentDidMount() {
    const disposer = autorun(() => {
      if (this.isError) {
        notification.error({
          message: 'autoRun 执行了',
        });
        setTimeout(() => {
          disposer();// 销毁 autorun
          notification.error({
            message: 'autoRun 销毁',
          });
        }, 2000);
      }
    });
    when(// 一旦
      () => !this.isError,
      () => {
        notification.success({ message: 'when 执行' });
      },
    );
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>操作</Button>
      </div>
    );
  }
}
