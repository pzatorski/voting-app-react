import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { title, description, submitterAvatarUrl, productImageUrl} = this.props.product;

    return (
      <div>
        <img
          src={productImageUrl}
          style={{ width: 150, height: 150 }}
        />
        <div>
          <div>
            <a style={{ color: '#00ffff' }}><b>{title}</b></a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div>
            <span style={{ color: 'grey' }}>Submitted by:</span>

            <img
              src={submitterAvatarUrl}
              style={{ width: 30, height: 30, borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
  })
};

export default Product;
