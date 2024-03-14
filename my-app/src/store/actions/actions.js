// Import des types d'actions pour la connexion de l'utilisateur
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../reducers/loginReducer'

// Import des types d'actions pour le profil utilisateur
import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE,
} from '../reducers/userReducer'

// Import d'axios pour les requêtes HTTP
import axios from 'axios'

// Action de connexion

export const login = (email, password) => async (dispatch) => {
  try {
    // Configuration de l'en-tête de la requête
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    // Requête POST pour la connexion de l'utilisateur
    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      { email, password },
      config
    )

    // Dispatch de l'action de succès de la connexion et envoi des données reçues
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    // Dispatch de l'action pour récupérer le profil utilisateur après la connexion
    dispatch(userProfile(data.body.token))
  } catch (error) {
    // En cas d'erreur, dispatch de l'action d'échec de connexion avec un message d'erreur approprié
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Action pour récupérer le profil de l'utilisateur

export const userProfile = (token) => async (dispatch) => {
  try {
    // Configuration de l'en-tête de la requête avec le token d'authentification
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    // Requête POST pour récupérer le profil de l'utilisateur
    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      { token },
      config
    )

    // Dispatch de l'action de succès de récupération du profil avec les données reçues
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    // En cas d'erreur, dispatch de l'action d'échec de récupération du profil avec un message d'erreur approprié
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Action pour mettre à jour le profil de l'utilisateur

export const updateProfile = (token, newUserName) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      { userName: newUserName }, // Utilisez newUserName pour mettre à jour le nom d'utilisateur
      config
    );

    // Dispatchez une action de succès si la requête réussit
    dispatch({ type: USER_PROFILE_UPDATE, payload: data });

    // Retournez les données pour une éventuelle utilisation dans le composant
    return data;
  } catch (error) {
    // Dispatchez une action d'échec si une erreur se produit
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    // En cas d'erreur, retournez null ou une autre valeur pour une gestion spécifique
    return null;
  }
};
// Action de déconnexion

export const logout = () => async (dispatch) => {
  // Dispatch de l'action de déconnexion
  dispatch({ type: USER_LOGOUT })
  // Dispatch de l'action pour réinitialiser le profil utilisateur
  dispatch({ type: USER_PROFILE_RESET })
}