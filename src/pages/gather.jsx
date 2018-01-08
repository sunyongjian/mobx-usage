import { observable, autorun } from 'mobx';
import React from 'react';

const obj = observable({
  a: 1,
  b: 2,
});
const a = obj.a;

autorun(() => {
  console.log(obj.a, 'obj.a');
});

autorun(() => {
  console.log(a, '-> a');
});

autorun(() => {
  console.log(obj, 'obj');
});

autorun(() => {
  setTimeout(() => {
    console.log(obj.a, 'async');
  }, 1000);
});

autorun(() => {
  if (obj.a === 2) {
    console.log(obj.a, 'if ---> aaa');
  }
});

obj.a = 2;

export default () => (<div>test</div>);
