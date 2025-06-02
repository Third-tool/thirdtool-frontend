import { Route, Routes } from 'react-router-dom';
import Main from '@pages/Main';
import ThreeDayDeck from './pages/ThreeDayDeck';
import ThreeDayCard from '@pages/ThreeDayCard';
import PermanentCard from '@pages/PermanentCard';
import PermanentDeck from '@pages/PermanentDeck';
import AddCard from '@pages/AddCard';
import QnA from '@pages/QnA';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/3day' element={<ThreeDayDeck />} />
      <Route path='/3day/card/:deckId' element={<ThreeDayCard />} />
      <Route path='/permanent' element={<PermanentDeck />} />
      <Route path='/permanent/card/:deckId' element={<PermanentCard />} />
      <Route path='/addcard' element={<AddCard />} />
      <Route path='/qna' element={<QnA />} />
    </Routes>
  );
}

export default App;
