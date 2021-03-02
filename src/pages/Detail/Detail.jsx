import React, { Component } from 'react'
import './Detail.scss'

const txt = 'categoria>producto>detalle'

class Detail extends Component {

  render() {
    return (
      <div className="detail">
        <p className="detail__title">{txt}</p>
        <div className="detail__cont">
          <input type="image" src="/img/lupa3.png" alt="item" className="detail__cont__item" />
          <div className="detail__cont__desc">
            <p className="detail__cont__desc__subtitle">Descripción del producto</p>
            <p className="detail__cont__desc__complete">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
          </div>
          <div className="detail__cont__buy">
            <p className="detail__cont__buy__sales">tantos vendidos</p>
            <p className="detail__cont__buy__name">Nombre del Item</p>
            <p className="detail__cont__buy__value">$ 1000</p>
            <button className="detail__cont__buy__button" type="button">Comprar</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Detail
