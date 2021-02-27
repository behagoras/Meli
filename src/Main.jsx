import React, { Component } from 'react';
import './Main.scss';

let txt = 'categoria>producto>detalle'

class Main extends Component {

    render(){
        return(
            <div className="main">
                <p  className="main__title">{txt}</p>
                <div className="main__cont">
                    <input type="image" src="/img/lupa3.png" alt="item" className="main__cont__item" />
                    <p  className="main__cont__price">$ precio</p>
                    <p  className="main__cont__desc">Descripcion detallada del producto</p>
                    <p  className="main__cont__city">Ciudad</p>
                </div>
            </div>
        );
    }

}

export default Main;