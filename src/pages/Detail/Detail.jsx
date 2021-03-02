/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import './Detail.scss'

const txt = 'categoria>producto>detalle'

class Detail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((res) => res.json())
      .then((product) => {
        this.setState({ product })
      })
    // Remember to add an accessToken
    fetch(`https://api.mercadolibre.com/items/${id}/description`, { Authorization: 'Bearer $ACCESS_TOKEN' })
      .then((res) => res.json())
      .then((description) => {
        this.setState({ description: description.text })
        console.log('descriptions', description)
      })
      .catch((e) => console.log)

  }

  render() {
    console.log('this.props.state', this.state?.dataJson)
    // eslint-disable-next-line camelcase
    const { id, title, subtitle, price = 0, currency_id, thumbnail } = this.state.product

    if (id) {
      return (
        <div className="detail" key={id}>
          <pre className="detail__title">{txt}</pre>
          <div className="detail__cont">
            <input type="image" src={thumbnail} alt="item" className="detail__cont__item" />
            <div className="detail__cont__desc">
              <p className="detail__cont__desc__subtitle">Descripción del producto</p>
              <p className="detail__cont__desc__complete">
                {this.state.description}
              </p>
            </div>
            <div className="detail__cont__buy">
              <p className="detail__cont__buy__sales">tantos vendidos</p>
              <p className="detail__cont__buy__name">
                {title}
              </p>
              {subtitle && <p>{subtitle}</p>}
              <p className="detail__cont__buy__value">
                {`${price} ${currency_id}`}
              </p>
              <button className="detail__cont__buy__button" type="button">Comprar</button>
            </div>
          </div>
        </div>
      )
    }
    return <>Loading...</>
  }
}

export default Detail
