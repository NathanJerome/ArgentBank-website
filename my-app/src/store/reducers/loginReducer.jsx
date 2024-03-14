// Définition des types d'actions pour la connexion de l'utilisateur
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'

// Initialisation de l'état initial du reducer pour la connexion de l'utilisateur
const INITIAL_STATE = {
  isLogged: false, // Indique si l'utilisateur est connecté ou non
  token: '', // Contient le token d'authentification de l'utilisateur
}

// Définition du reducer loginReducer pour gérer les actions liées à la connexion de l'utilisateur
export const loginReducer = (state = INITIAL_STATE, action) => {
  // Switch sur le type d'action
  switch (action.type) {
    // Cas où la connexion de l'utilisateur est réussie
    case USER_LOGIN_SUCCESS:
      return { isLogged: true, token: action.payload.body.token } // Mise à jour de l'état avec le token
    // Cas où la connexion de l'utilisateur a échoué
    case USER_LOGIN_FAIL:
      return { isLogged: false, token: null, error: action.payload } // Retourne une erreur
    // Cas où l'utilisateur se déconnecte
    case USER_LOGOUT:
      return { isLogged: false, token: null } // Réinitialise l'état de la connexion
    // Par défaut, retourne l'état inchangé
    default:
      return state
  }
}