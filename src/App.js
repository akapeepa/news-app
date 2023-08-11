import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Routes>
          <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} county='in' category='general' />} />
          <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key='business' pageSize={pageSize} county='in' category='business' />} />
          <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={pageSize} county='in' category='entertainment' />} />
          <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} county='in' category='general' />} />
          <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key='health' pageSize={pageSize} county='in' category='health' />} />
          <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key='science' pageSize={pageSize} county='in' category='science' />} />
          <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={pageSize} county='in' category='sports' />} />
          <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={pageSize} county='in' category='technology' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App