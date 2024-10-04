import type { FC } from 'react';
import React from 'react';
import './App.module.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  CountdownView,
  QualityControlChartView,
  TestResultsView,
  Home,
} from '@views';
import { Container } from '@components';
import { Navigation } from '@layouts';

const App: FC = () => {
  return (
    <Container>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<CountdownView />} />
          <Route
            path="/quality-control"
            element={<QualityControlChartView />}
          />
          <Route path="/test-results" element={<TestResultsView />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
