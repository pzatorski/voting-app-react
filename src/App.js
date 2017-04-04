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
    votes: 21,
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image-aqua.png?raw=true',
    arrow: 'https://github.com/pzatorski/voting-app-react/blob/master/images/voting%20arrow/up-arrow-circle.png?raw=true'
  },
  {
    id: 2,
    title: 'Blue Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 25,
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image-rose.png?raw=true',
    arrow: 'https://github.com/pzatorski/voting-app-react/blob/master/images/voting%20arrow/up-arrow-circle.png?raw=true'
  },
  {
    id: 3,
    title: 'Red Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 38,
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image-yellow.png?raw=true',
    arrow: 'https://github.com/pzatorski/voting-app-react/blob/master/images/voting%20arrow/up-arrow-circle.png?raw=true'
  },
  {
    id: 4,
    title: 'Green Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 10,
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image-steel.png?raw=true',
    arrow: 'https://github.com/pzatorski/voting-app-react/blob/master/images/voting%20arrow/up-arrow-circle.png?raw=true'
  },
  {
    id: 5,
    title: 'Black Moon',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 17,
    submitterAvatarUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/avatars/icon.jpg?raw=true',
    productImageUrl: 'https://github.com/pzatorski/voting-app-react/blob/master/images/products/image.png?raw=true',
    arrow: 'https://github.com/pzatorski/voting-app-react/blob/master/images/voting%20arrow/up-arrow-circle.png?raw=true'
  }
];

export default App;
