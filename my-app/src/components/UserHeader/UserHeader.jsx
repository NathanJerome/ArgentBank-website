import './UserHeader.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../store/actions/actions'

export default function UserHeader() {
  const dispatch = useDispatch()

  const { firstName, lastName, userName } = useSelector((state) => state.userProfile)
  const { token } = useSelector((state) => state.userLogin)

  const [newUsername, setNewUsername] = useState() // Initialisez le nouvel utilisateur avec le prénom actuel


  const [editButton, setEditButton] = useState(false) // Initialisez le bouton d'édition à false

  const editNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  const submitHandler =  (e) => {
    e.preventDefault()
    dispatch(updateProfile(token, newUsername)) // Mettez à jour le nom d'utilisateur avec newUsername
    setEditButton(false); //Remettre le bouton d'édition a son état de base
  }


  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Bienvenue
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Editez votre nom d'utilisateur
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Edition du nom d'utilisateur</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
              <input
                type="text"
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder={userName}
                required
              />
              <br></br><input className='gray-input'
                type="text"
                value={firstName}
                readOnly
              />
              <br></br><input className='gray-input'
                type="text"
                value={lastName}
                readOnly
              />
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Sauvegarder
              </button>
              <button className="cancel-button" onClick={editNameButton}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}