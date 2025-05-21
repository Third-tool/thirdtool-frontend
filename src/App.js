import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ThreeDay from './pages/ThreeDay';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/3day' element={<ThreeDay />} />
    </Routes>
  );
}

export default App;
