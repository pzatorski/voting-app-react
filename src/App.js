import React, { Component } from 'react';
import ProductList from './ProductList';

class App extends Component {
  render() {
    return <ProductList products={products} />;
  }
}


const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'http://www.customizetrip.com/images/avatar.jpeg',
    productImageUrl: 'https://github.com/pzatorski/fullstack-react-code/blob/master/voting_app/images/products/image-aqua.png?raw=true'
  },
  {
    id: 2,
    title: 'Blue Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'http://www.customizetrip.com/images/avatar.jpeg',
    productImageUrl: 'https://github.com/pzatorski/fullstack-react-code/blob/master/voting_app/images/products/image-rose.png?raw=true'
  },
  {
    id: 3,
    title: 'Red Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'http://www.customizetrip.com/images/avatar.jpeg',
    productImageUrl: 'https://github.com/pzatorski/fullstack-react-code/blob/master/voting_app/images/products/image-steel.png?raw=true'
  },
  {
    id: 4,
    title: 'Green Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'http://www.customizetrip.com/images/avatar.jpeg',
    productImageUrl: 'https://github.com/pzatorski/fullstack-react-code/blob/master/voting_app/images/products/image-yellow.png?raw=true'
  },
  {
    id: 5,
    title: 'Black Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'http://www.customizetrip.com/images/avatar.jpeg',
    productImageUrl: 'https://github.com/pzatorski/fullstack-react-code/blob/master/voting_app/images/products/image.png?raw=true'
  }
];

export default App;
