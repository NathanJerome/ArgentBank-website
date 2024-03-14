import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { logout } from '../../store/actions/actions'

function Header(){
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.userLogin)
    const { firstName, userName } = useSelector((state) => state.userProfile)
  
    const logoutHandler = () => {
      dispatch(logout())
      navigate('/')
    }
  
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {!token ? (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Connexion
            </Link>
          ) : (
            ''
          )}
          {token ? (
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {firstName} {userName ? `(${userName})` : ''}
            </Link>
          ) : (
            ''
          )}
          {token ? (
            <Link onClick={logoutHandler} className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Déconnexion
            </Link>
          ) : (
            ''
          )}
        </div>
      </nav>
    )
  }

export default Header