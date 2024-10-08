import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SeriesPage from "./pages/SeriesPage";
import MyList from "./pages/MyList";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </Router>
  );
};

export default App;
