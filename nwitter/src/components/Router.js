import React, { useState } from "react";
import { HashRouter as Router, Route, Routes,useNavigate} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRotuer = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (<>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </>) : (<>
                    <Route path="/" element={<Auth />} />
                    {/* notAuth*/}
                </>)
                }
            </Routes>
        </Router>
    )
}

export default AppRotuer