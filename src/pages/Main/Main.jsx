import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Main.scss'

const txt = 'categoria>producto>detalle'

class Main extends Component {
  render() {
    const { search } = this.props
    const { results } = search
    return (
      <div className="main">
        <h2 className="main__title">{txt}</h2>
        <h3>
          {'Resultados para '}
          <strong>Harry Potter</strong>
        </h3>
        {results.map((result) => (
          <ProductCard result={result} />
        ))}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Main)
