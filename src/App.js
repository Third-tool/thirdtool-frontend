import { Route, Routes } from 'react-router-dom';
import ThreeDayDeck from './pages/ThreeDayDeck';
import ThreeDayCard from '@pages/ThreeDayCard';
import PermanentCard from '@pages/PermanentCard';
import PermanentDeck from '@pages/PermanentDeck';
import AddCard from '@pages/AddCard';
import QnA from '@pages/QnA';
import Login from '@pages/Login';
import KakaoRedirectPage from '@pages/KakaoRedirectPage';
import SignUp from '@pages/SignUp';
import SelectProject from '@components/main/SelectProject';
import StartPage from '@pages/StartPage';
import Main from '@pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/main' element={<Main />} />
      <Route path='/3day' element={<ThreeDayDeck />} />
      <Route path='/3day/card/:deckId' element={<ThreeDayCard />} />
      <Route path='/permanent' element={<PermanentDeck />} />
      <Route path='/permanent/card/:deckId' element={<PermanentCard />} />
      <Route path='/addcard' element={<AddCard />} />
      <Route path='/qna' element={<QnA />} />
      <Route path='/login' element={<Login />} />
      <Route path='/oauth/kakao/callback' element={<KakaoRedirectPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/SelectProject' element={<SelectProject />} />
    </Routes>
  );
}

export default App;
