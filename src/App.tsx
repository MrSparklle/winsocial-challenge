import Home from "pages/home/Home";
import React from "react";
import styles from "./App.module.scss";

function App() {
  // all pages componentes will be added here with a specific router controller like react-router-dom
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

export default App;
