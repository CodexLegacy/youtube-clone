import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideo from './RecommendedVideo';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app-page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app-page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
