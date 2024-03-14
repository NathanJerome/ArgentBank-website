// Import des fonctions et bibliothèques Redux nécessaires
import { createStore, applyMiddleware , combineReducers } from 'redux'

// Import de l'extension Redux DevTools
import { composeWithDevTools } from 'redux-devtools-extension'

// Import de Redux Thunk pour les actions asynchrones
import thunk from 'redux-thunk'

// Import des reducers spécifiques
import { userReducer } from './reducers/userReducer'
import { loginReducer } from './reducers/loginReducer'

// Import des fonctionnalités Redux Persist pour la persistance des données
import { persistStore, persistReducer } from 'redux-persist'

// Import du stockage utilisé pour la persistance
import storage from 'redux-persist/lib/storage'

// Configuration de la persistance
const persistConfig = {
  key: 'root', // Clé racine pour le stockage persistant
  storage, // Utilisation du stockage défini (localStorage par défaut)
}

// Combinaison des reducers spécifiques pour créer le rootReducer
const rootReducer = combineReducers({
  userLogin: loginReducer, // Reducer pour la connexion de l'utilisateur
  userProfile: userReducer, // Reducer pour le profil de l'utilisateur
})

// Création du reducer persistant en utilisant la configuration persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Définition des middlewares à utiliser (dans ce cas, uniquement Redux Thunk)
const middleware = [thunk]

// Création du store Redux en utilisant createStore avec le reducer persistant et les middlewares
const store = createStore(
  persistedReducer, // Utilisation du reducer persistant
  composeWithDevTools(applyMiddleware(...middleware)) // Application des middlewares avec Redux DevTools
)

// Création du persistor pour le store, utilisé pour la persistance des données
export const persistor = persistStore(store)

// Export du store par défaut
export default store