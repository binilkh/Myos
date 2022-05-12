import React from "react";
import HomePage from "./components/HomePage";
import TopBar from "./components/TopBar";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "./i18n";
function App() {
  const { t, i18n } = useTranslation();
  const [initialized, setInitialized] = useState(false);
  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  };
useEffect(() => {
    if (!initialized) {
      changeLanguage(localStorage.getItem("language") || "en");
      setInitialized(true);
    }
  });
return (
    <div className="App">
        <TopBar />
        <HomePage />
    </div>
  );
}
export default App;