import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddCard from './pages/AddCard';
import QnA from './pages/QnA';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/addcard' element={<AddCard />} />
          <Route path='/qna' element={<QnA />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
