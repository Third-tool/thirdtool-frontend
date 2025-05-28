import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ThreeDay from './pages/ThreeDay';
import ThreeDayCard from './pages/ThreeDayCard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/3day' element={<ThreeDay />} />
      <Route path='/3day/card' element={<ThreeDayCard />} />
    </Routes>
  );
}

export default App;
