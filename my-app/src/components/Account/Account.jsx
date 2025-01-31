import './Account.scss'
import { Link } from 'react-router-dom'

function Account(props) {

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/transaction"><button className="main-nav-logo">View Transaction</button></Link>
      </div>
    </section>
  )
}

export default Account