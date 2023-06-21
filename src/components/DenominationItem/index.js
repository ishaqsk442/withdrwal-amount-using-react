// Write your code here
import './index.css'

const DenominationItem = props => {
  const {withdrawButton, key, amountWithdraw} = props
  console.log(key)
  const {id, value} = withdrawButton
  console.log(id)

  const toWithdraw = () => {
    // const {value} = withdrawButton
    amountWithdraw(value)
  }

  return (
    <li className="list">
      <button type="button" className="btn" onClick={toWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
