import { observable, action } from 'mobx';
import axios from 'axios';

class ListStore {
  static url = 'api/list';

  @observable list = {
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
    dataSource: [],
  }

  @action toggleLoading = () => {
    this.list.loading = !this.list.loading;
  }

  @action setList = (data) => {
    this.list.dataSource = data.list;
    this.list.pagination.total = data.length;
  }

  @action fetchList = async (query) => {
    this.toggleLoading();
    const result = await axios({
      method: 'get',
      url: this.constructor.url,
      responseType: 'json',
      params: query,
    }).then((res) => {
      if (res.status === 200) {
        return res;
      }
      throw new Error('服务器没给数据啊...');
    });

    if (result) {
      const { data } = result;
      this.toggleLoading();
      this.setList(data);
    }
  }
}

const listStore = new ListStore();
export default listStore;
export { ListStore };
