// Import des dépendances
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index.jsx';
import Login from './pages/Login/LoginPage.jsx'
import Profile from './pages/Profile/Profile.jsx';


// Définition des routes
const AppRouter = () => {

    return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route path="*" element={<div>Erreur 404</div>} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default AppRouter;