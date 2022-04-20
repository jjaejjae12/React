import React, { useState } from "react";
import {HashRouter as Router,Route,Routes,Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRotuer = ({isLoggedIn}) => {
    return <Router>
        <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Auth />} />
        </Routes>
    </Router>
}

export default AppRotuer