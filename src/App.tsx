import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './slicers/store';
import { Provider } from 'react-redux';
import Form from './components/Form';
import ShowCase from './components/ShowCase';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} /> 
          <Route path="/showcase" element={<ShowCase/>} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
