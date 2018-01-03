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
          message: '有错误',
          description: '这是错误提示',
        });
        setTimeout(() => {
          disposer();// 销毁 autorun
        }, 2000);
      }
    });
    when(// 一旦
      () => !this.isError,
      () => {
        notification.success({ message: '没有错误', description: '没有错误' });
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
