import React, { Component } from 'react';

class Product extends Component {

  constructor(props) {
      super(props);
      this.handleUpVote = this.handleUpVote.bind(this);
    }

  handleUpVote () {
    this.props.onVote(this.props.id)
  }

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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <a onClick={this.handleUpVote}>
              <img
                src={this.props.arrow}
                style={{ width: 30, height: 30, borderRadius: '50%' }}
              />
            </a>
            <a style={{ margin: 10, fontWeight: 'bold' }}>{this.props.votes}</a>
          </div>
          <div>
            <a style={{ color: 'black'}}><b>{this.props.title}</b></a>
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
