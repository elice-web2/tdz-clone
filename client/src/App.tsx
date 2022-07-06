import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Dummy = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
`;
