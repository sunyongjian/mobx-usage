import React from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Table } from 'antd';

@inject('listStore')
@observer
export default class A extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    const { listStore } = this.props;
    listStore.fetchList();
  }

  render() {
    const { list } = this.props.listStore;
    console.log(toJS(list), 'list');
    return (<Table
      columns={[{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }]}
      {...toJS(list)}
    />);
  }
}
