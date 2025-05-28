import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddCard from './pages/AddCard';
import QnA from './pages/QnA';
import React from 'react';
import ThreeDayDeck from './pages/ThreeDayDeck';
import ThreeDayCard from './pages/ThreeDayCard';
import PermanentCard from './pages/PermanentCard';
import PermanentDeck from './pages/PermanentDeck';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/3day' element={<ThreeDayDeck />} />
      <Route path='/3day/card' element={<ThreeDayCard />} />
      <Route path='/permanent' element={<PermanentDeck />} />
      <Route path='/permanent/card' element={<PermanentCard />} />
      <Route path='/addcard' element={<AddCard />} />
      <Route path='/qna' element={<QnA />} />
    </Routes>
  );
}

export default App;
