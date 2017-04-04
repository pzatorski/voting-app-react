import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {

  // renderList = (products) => {
  //   const productComponents = products.map((product, index) => {
  //     return <Product key={index} product={product} />;
  //   });
  //
  //   return productComponents;
  // }

  render() {
    const { products } = this.props;

    // const productComponents = products.map(function (product, index) {
    //   return <Product product={product} />;
    // });

    // const productComponents = products.map((product, index) => (
    //   <Product key={index} product={product} />
    // ));

    // const foo = {
    //   1: {
    //     id: 1,
    //     name: 'pat'
    //   },
    //   232432: {
    //     id: 232432,
    //     name: 'mat'
    //   }
    // }
    //
    // const bar = Object.keys(foo).map((elem, i) => {
    //   const product = foo[elem];
    //   return <Product key={i} product={product} />;
    // })
    const productsvote = products.sort((a, b) => (
      b.votes - a.votes
    ));

    const productComponents = products.map((product) => {
      return <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        />;
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {productComponents}
      </div>
    );
  }
}



export default ProductList;
