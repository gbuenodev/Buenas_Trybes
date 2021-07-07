import React from 'react';

class Button extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {frase} = this.props
    console.log(frase);
  }
  
  render() {
    const { numero } = this.props;
    return (
      <button onClick={this.handleClick}>Botão{ numero }</button>
    )
  }
}

export default Button;