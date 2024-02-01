import React from 'react';
import "./style.scss";
import  Header from '../../components/Header/Header'
import  Footer from '../../components/Footer/Footer'

function Login(){

    return (
        <>
        <Header />
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit" name="Login">
              Sign In
            </button>
          </form>
        </section>
        <Footer />
        </>
      )
    }
    export default Login;