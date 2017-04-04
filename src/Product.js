import React, { Component } from 'react';

class Product extends Component {
  render() {
    // const { title, description, submitterAvatarUrl, productImageUrl} = this.props.product;

    return (
      <div style={{ padding: 5, display: 'flex', flexDirection: 'row' }}>
        <div>
          <img
            src={this.props.productImageUrl}
            style={{ width: 150, height: 150 }}
          />
        </div>
        <div style={{ padding: 5 }}>
            <a>
              <img
                src='https://github.com/pzatorski/voting-app-react/blob/master/images/voting%20arrow/up-arrow-circle.png?raw=true'
                style={{ width: 30, height: 30, borderRadius: '50%', padding: 2 }}
              />
            </a>
            {this.props.votes}
          <div>
            <a style={{ color: '#00ffff'}}><b>{this.props.title}</b></a>
            <p>{this.props.description}</p>
          </div>
          <div>
            <span style={{ color: 'grey' }}>Submitted by:</span>

            <img
              src={this.props.submitterAvatarUrl}
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
