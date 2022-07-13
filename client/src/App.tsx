import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalendarStamp from './pages/CalendarStamp';
import { ROUTES, ROUTES_NOT_LOGIN } from './Route';
import { getCookie } from './utils';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {getCookie('token')
          ? Object.values(ROUTES).map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))
          : Object.values(ROUTES_NOT_LOGIN).map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        <Route path={'/calendar'} element={<CalendarStamp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
