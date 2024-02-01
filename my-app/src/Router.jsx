// Import des dépendances
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index.jsx';
import Login from './pages/Login/LoginPage.jsx'


// Définition des routes
const AppRouter = () => {
    return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />

				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default AppRouter;