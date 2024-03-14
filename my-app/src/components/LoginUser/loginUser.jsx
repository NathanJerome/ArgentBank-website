// Import des hooks useState et useEffect de React pour gérer l'état et les effets secondaires
import { useState, useEffect } from 'react'

// Import du fichier de style SCSS spécifique pour le composant LoginUser
import './loginUser.scss'

// Import des hooks useDispatch et useSelector de react-redux pour gérer les actions et l'état du store Redux
import { useDispatch, useSelector } from 'react-redux'

// Import de l'action login depuis le fichier d'actions
import { login } from '../../store/actions/actions'

// Import du hook useNavigate de react-router pour la navigation
import { useNavigate } from 'react-router'

// Définition du composant fonctionnel LoginUser
export default function LoginUser() {
  // Initialisation du dispatcher pour lancer des actions Redux
  const dispatch = useDispatch()

  // Initialisation du hook useNavigate pour la navigation dans l'application
  let navigate = useNavigate()

  // Déclaration des états locaux pour l'email et le mot de passe du formulaire de connexion
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Utilisation du hook useSelector pour extraire l'état du store Redux
  // 'state.userLogin' correspond à une partie de l'état global du store
  // error et token sont extraits de cet état
  const { error } = useSelector((state) => state.userLogin)
  const { token } = useSelector((state) => state.userLogin)

  // Gestionnaire de soumission du formulaire de connexion
  const submitHandler = (e) => {
    e.preventDefault() // Empêche le rechargement de la page lors de la soumission du formulaire
    dispatch(login(email, password)) // Appel de l'action login avec les données email et password
  }

  // Effet secondaire qui se déclenche lorsque le token change
  // Si un token est présent, l'utilisateur est redirigé vers la page de profil
  useEffect(() => {
    if (token) {
      navigate('/profile') // Redirection vers la page de profil
    }
  }, [token, navigate]) // Le useEffect dépend du changement de token et de navigate

  // Rendu du composant
  return (
    <section className="sign-in-content">
    <div className='form-div'>
      <i className="fa fa-user-circle sign-in-icon"></i> {/* Icône utilisateur */}
      <h1>Connexion</h1> {/* Titre de la section de connexion */}
      <form onSubmit={submitHandler}> {/* Gestion de la soumission du formulaire */}
        <div className="input-wrapper">
          <label htmlFor="username">Email</label> {/* Libellé de champ pour l'email */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Gestionnaire de changement pour l'email
            required // Champ requis
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Mot de passe</label> {/* Libellé de champ pour le mot de passe */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Gestionnaire de changement pour le mot de passe
            required // Champ requis
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" /> {/* Case à cocher pour "se souvenir de moi" */}
          <label htmlFor="remember-me">Remember me</label> {/* Libellé pour "se souvenir de moi" */}
        </div>
        <button className="sign-in-button" type="submit" name="Login"> {/* Bouton de connexion */}
          Connexion
        </button>
        {error && ( // Affichage de l'erreur s'il y en a une
          <div>
            <br />
            {error} {/* Affichage de l'erreur */}
          </div>
        )}
      </form>
      </div>
    </section>
  )
}