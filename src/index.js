import React from 'react';
import ReactDom from 'react-dom';
import { normalize, arrayOf, Schema } from 'normalizr';
import util from 'util';

const data = [{
  id: 1,
  title: 'Some Article',
  author: {
    id: 7,
    name: 'Dan'
  },
  contributors: [{
    id: 10,
    name: 'Abe'
  }, {
    id: 15,
    name: 'Fred'
  }]
}, {
  id: 4,
  title: 'Some Article2',
  author: {
    id: 8,
    name: 'Dans'
  },
  contributors: [{
    id: 11,
    name: 'Abes'
  }, {
    id: 16,
    name: 'Freds'
  }]
}];

const article = new Schema('articles');
const user = new Schema('users');
article.define({
  author: user,
  contributors: arrayOf(user)
});

const state = normalize(data, arrayOf(article))
console.log(util.inspect(state, false, null))

ReactDom.render(
  <p>Hello</p>,
  document.getElementById('root')
);
