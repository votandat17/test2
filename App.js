import { useEffect, useState, useContext, createContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";
function App() {
  return (
    <div className="app">
      <header>
        <h1>Router</h1>
        <nav>
          <Link to={'/'}>HomePage</Link>
          <Link to={'/news'}>NewsPage</Link>
          <Link to={'/contact'}>ContactPage</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path="/news" element={<NewsPage />}/>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer>
        <p>Follow us</p>
      </footer>
    </div>
  );
}




export default App;