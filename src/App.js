import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize = 5;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key='general' pageSize={this.pageSize} county='in' category='general' />} />
            <Route path="/business" element={<News setProgress={this.setProgress} key='business' pageSize={this.pageSize} county='in' category='business' />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} county='in' category='entertainment' />} />
            <Route path="/general" element={<News setProgress={this.setProgress} key='general' pageSize={this.pageSize} county='in' category='general' />} />
            <Route path="/health" element={<News setProgress={this.setProgress} key='health' pageSize={this.pageSize} county='in' category='health' />} />
            <Route path="/science" element={<News setProgress={this.setProgress} key='science' pageSize={this.pageSize} county='in' category='science' />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} key='sports' pageSize={this.pageSize} county='in' category='sports' />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key='technology' pageSize={this.pageSize} county='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
