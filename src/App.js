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
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image-aqua.png?raw=true'
  },
  {
    id: 2,
    title: 'Blue Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image-rose.png?raw=true'
  },
  {
    id: 3,
    title: 'Red Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image-yellow.png?raw=true'
  },
  {
    id: 4,
    title: 'Green Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image-steel.png?raw=true'
  },
  {
    id: 5,
    title: 'Black Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 'generateVoteCount()',
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image.png?raw=true'
  }
];

export default App;
