import React, { Component } from 'react';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let amount = ev.target.elements['text'].value
    amount = parseInt(amount, 10)
    if (amount && amount > 0) {
      this.props.addToWallet(amount)
    }
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input name="text" type="text" placeholder="Add to Wallet"/>
      <input type="submit" />
    </form>
  }
}

export default WalletForm;
