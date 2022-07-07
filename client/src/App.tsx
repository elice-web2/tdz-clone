import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Home from './pages/Home';
import MealsDetail from './pages/Meals/MealsDetail';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ChartPage from './pages/ChartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meals/detail" element={<MealsDetail />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
