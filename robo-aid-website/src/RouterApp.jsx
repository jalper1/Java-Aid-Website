import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./routerApp.css";

import HomePage from "../stories/HomePage/HomePage";
import LoginPage from "../stories/Login Page/LoginPage";
import SignupPage from "../stories/Sign Up/SignupPage";
import LevelOnePage from "../stories/LevelOnePage/LevelOnePage";
import LevelTwoPage from "../stories/LevelTwoPage/LevelTwoPage";
import LevelThreePage from "../stories/LevelThreePage/LevelThreePage";
import ChooseLevelPage from "../stories/Choose Level Page/ChooseLevel";
import LeaderboardsPage from "../stories/LeaderBoardsPage/LeaderboardsPage";
import Instructions from "../stories/Instructions/Instructions";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/levelone" element={<LevelOnePage />} />
        <Route path="/leveltwo" element={<LevelTwoPage />} />
        <Route path="/levelthree" element={<LevelThreePage />} />
        <Route path="/chooselevel" element={<ChooseLevelPage />} />
        <Route path="/leaderboards" element={<LeaderboardsPage />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="*">"404 Not Found"</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
