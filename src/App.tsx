import type { FC } from 'react';
import React from 'react';
import './App.module.scss';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  CountdownView,
  QualityControlChartView,
  TestResultsView,
} from '@views';

const Home: FC = () => {
  return <h1>Welcome to Vital Bio</h1>;
};

const App: FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/countdown">Countdown</Link>
            </li>
            <li>
              <Link to="/quality-control">Quality Control Chart</Link>
            </li>
            <li>
              <Link to="/test-results">Test Results</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<CountdownView />} />
          <Route
            path="/quality-control"
            element={<QualityControlChartView />}
          />
          <Route path="/test-results" element={<TestResultsView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
