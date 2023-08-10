import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key='general' pageSize={5} county='in' category='general' />} />
            <Route path="/business" element={<News key='business' pageSize={5} county='in' category='business' />} />
            <Route path="/entertainment" element={<News key='entertainment' pageSize={5} county='in' category='entertainment' />} />
            <Route path="/general" element={<News key='general' pageSize={5} county='in' category='general' />} />
            <Route path="/health" element={<News key='health' pageSize={5} county='in' category='health' />} />
            <Route path="/science" element={<News key='science' pageSize={5} county='in' category='science' />} />
            <Route path="/sports" element={<News key='sports' pageSize={5} county='in' category='sports' />} />
            <Route path="/technology" element={<News key='technology' pageSize={5} county='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
