import React from 'react';
import  Header from '../../components/Header/Header'
import  Footer from '../../components/Footer/Footer'
import LoginUser from '../../components/LoginUser/loginUser';


function Login(){

  document.title = 'Argent Bank - Login'

    return (
        <>
        <Header />
        <main className="logindark">
        <LoginUser />
        </main>
        <Footer />
        </>
      )
    }
    export default Login;