// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {initial: 2000}

  withdraw = withdrwalAmount => {
    const {initial} = this.state
    console.log(initial)

    this.setState(prevState => ({initial: prevState.initial - withdrwalAmount}))
  }

  render() {
    const {initial} = this.state

    const {denominationsList} = this.props
    return (
      <div className="main">
        <div className="card">
          <div className="profile-cont">
            <p className="name-circle">S</p>
            <p className="name">Sarah Williams</p>
          </div>

          <div className="balance-cont">
            <p className="balance">Your Balance</p>
            <div>
              <p className="final-amount">{initial}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>

          <p className="balance">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-cont">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                withdrawButton={each}
                amountWithdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
