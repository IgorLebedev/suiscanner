import React from 'react';
import './App.css';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
