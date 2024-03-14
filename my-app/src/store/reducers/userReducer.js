// Définition des types d'actions pour le profil utilisateur
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL'
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET'
export const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE'

// Initialisation de l'état initial du reducer pour le profil utilisateur
const INITIAL_STATE = { success: false, firstName: '', lastName: '', userName: '' }

// Définition du reducer userReducer pour gérer les actions liées au profil utilisateur
export const userReducer = (state = INITIAL_STATE, action) => {
  // Switch sur le type d'action
  switch (action.type) {
    // Cas où la mise à jour du profil utilisateur est réussie
    case USER_PROFILE_SUCCESS:
      return {
        firstName: action.payload.body.firstName, // Mise à jour du prénom
        lastName: action.payload.body.lastName, // Mise à jour du nom de famille
        userName: action.payload.body.userName
      }
    // Cas où la mise à jour du profil utilisateur est effectuée
    case USER_PROFILE_UPDATE:
      return {
        ...state,
        success: true,
        userName: action.payload.body.userName,
      };
    // Cas où la mise à jour du profil utilisateur a échoué
    case USER_PROFILE_FAIL:
      return { error: action.payload } // Retourne une erreur
    // Cas où le profil utilisateur est réinitialisé
    case USER_PROFILE_RESET:
      return {
        firstName: null, // Réinitialisation du prénom
        lastName: null, // Réinitialisation du nom de famille
        userName: null,
        
      }
    // Par défaut, retourne l'état inchangé
    default:
      return state
  }
}