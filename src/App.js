import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(10);

    return (
      <div>

        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' />}></Route>
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category='business' />}></Route>
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category='entertainment' />}></Route>
            <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' />}></Route>
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category='health' />}></Route>
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category='science' />}></Route>
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category='sports' />}></Route>
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }

  export default App;
