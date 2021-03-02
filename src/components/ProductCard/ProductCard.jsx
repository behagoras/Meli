import React, { Component } from 'react'
import './ProductCard.scss'

export default class ProductCard extends Component {

  render() {
    const { result } = this.props
    // eslint-disable-next-line camelcase
    const { price, id, title, thumbnail, seller_address } = result
    return (
      <div className="main__cont" key={id}>
        <input type="image" src={thumbnail} alt={title} className="main__cont__item" />
        <p className="main__cont__name">{title}</p>
        <div className="main__cont__price">{price}</div>
        {/* <p className="main__cont__desc">{description}</p> */}
        <p className="main__cont__city">{seller_address?.city?.name}</p>
      </div>
    )
  }
}
