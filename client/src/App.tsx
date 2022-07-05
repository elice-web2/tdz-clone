import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Dummy = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
`;
