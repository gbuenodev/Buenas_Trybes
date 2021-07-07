import React from 'react';
import '../App.css'

class Button extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      cliques: 0,
      cor: '',
    }
  }

  handleClick(cliques) {
    const { frase } = this.props
    console.log(frase);
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques + 1,
      cor: cliques % 2 === 0 ? '' : 'verde'
    }))
  }
  
  render() {
    const { numero } = this.props;
    const { cliques, cor } = this.state;
    return (
      <button
        onClick={()=>this.handleClick(cliques)}
        className={cor}
      >
        Botão:{numero} Cliques:{cliques}
      </button>
    )
  }
}

export default Button;