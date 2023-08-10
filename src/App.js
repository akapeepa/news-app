import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key='general' pageSize={this.pageSize} county='in' category='general' />} />
            <Route path="/business" element={<News key='business' pageSize={this.pageSize} county='in' category='business' />} />
            <Route path="/entertainment" element={<News key='entertainment' pageSize={this.pageSize} county='in' category='entertainment' />} />
            <Route path="/general" element={<News key='general' pageSize={this.pageSize} county='in' category='general' />} />
            <Route path="/health" element={<News key='health' pageSize={this.pageSize} county='in' category='health' />} />
            <Route path="/science" element={<News key='science' pageSize={this.pageSize} county='in' category='science' />} />
            <Route path="/sports" element={<News key='sports' pageSize={this.pageSize} county='in' category='sports' />} />
            <Route path="/technology" element={<News key='technology' pageSize={this.pageSize} county='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
