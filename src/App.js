import React, { Component } from 'react';
import ProductList from './ProductList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: products
    }
  }


  handleUpvote = (id) => {
    const { products } = this.state;

    const newProducts = products.map((product, index) => {
      if (product.id === id) {

        // return {
        //   ...product,
        //   votes: product.votes + 1
        // };

        return {
          id: product.id,
          title: product.title,
          description: product.description,
          url: product.url,
          votes: product.votes + 1,
          submitterAvatarUrl: product.submitterAvatarUrl,
          productImageUrl: product.productImageUrl,
          arrow: product.arrow
        };
      }

      return product;
    });

    this.setState({
      products: newProducts
    });
  }

  render() {

    return <ProductList products={this.state.products} onUpvote={this.handleUpvote} />;
  }
}


const numbers = [1, 2, 3, 4, 5, 6];

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
