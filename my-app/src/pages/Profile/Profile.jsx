import React from "react"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './style.scss'
import  Header from '../../components/Header/Header'
import  Footer from '../../components/Footer/Footer'
import UserHeader from "../../components/UserHeader/UserHeader"
import Account from "../../components/Account/Account"

function Profile(){

    document.title = "Argent Bank - Page utilisateur"
    let navigate = useNavigate()
  
    const { token } = useSelector((state) => state.userLogin)
   
    useEffect(() => {
      if (!token) {
        navigate('/')
      }
    }, [token, navigate])


    return (
        <>
        <Header />
        <main class="main bg-dark">
        <UserHeader />
        <h2 class="sr-only">Accounts</h2>
            <Account
            title="Argent Bank Checking (x8349)"
            amount="$2,083.79"
            description="Available Balance"
            
            />
            <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
            />
            <Account
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
            />
        </main>
        <Footer />
        </>
    );
}

export default Profile;
