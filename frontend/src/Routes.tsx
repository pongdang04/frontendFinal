import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StatisticsPage from "./Pages/statistics";
import DetailPage from "./Pages/memberDetail";
import DBPage from "./Pages/memberDB";
import LandingPage from "./Pages/LandingPage";
import ReportPage from "./Pages/ReportPage";
import NoticePage from "./Pages/NoticePage";

const RoutersManagement = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/memberDB" element={<DBPage />} />
        <Route path="/memberDetail" element={<DetailPage />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/noticeBoard" element={<NoticePage />} />
      </Routes>
    </Router>
  );
};

export default RoutersManagement;
