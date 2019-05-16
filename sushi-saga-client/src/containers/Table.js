import React, { Fragment } from 'react'
import WalletForm from '../components/WalletForm'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.sushisEaten)
          }
        </div>
        <WalletForm addToWallet={props.addToWallet}/>
      </div>
    </Fragment>
  )
}

export default Table
