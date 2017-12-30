import { observable, action } from 'mobx';

class CommonStore {

  @observable info = {
    count: 1,
  }

  @action increaseCount = () => {
    this.info.count += 1;
  }

  @action decreaseCount = () => {
    if (this.info.count === 0) {
      return;
    }
    this.info.count -= 1;
  }
}

const commonStore = new CommonStore();
export default commonStore;
