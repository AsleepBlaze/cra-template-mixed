import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import Index from './components';
import axios from 'axios';
axios.defaults.baseURL = '/api/v1';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
