import React from "react";
import ReactDOM from "react-dom/client";

// My Components
import Header from "./components/Header";
import Login from "./components/Login";
import NoMatch  from "./components/NoMatch";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/Register";
import Drive from "./components/Drive"

function Main() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/home" element={<Drive/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
    </Router>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
