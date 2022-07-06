import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './pages/Navbar';
import TopNav from './pages/TopNav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/top" element={<TopNav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Dummy = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
`;
