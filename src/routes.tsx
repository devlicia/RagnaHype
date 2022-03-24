import { RagnarokHype } from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageInfo } from './pages/info';
import { PageDonate } from './pages/donate';

export function MainRoutes() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<RagnarokHype />} />
        <Route path="/info" element={<PageInfo />} />
        <Route path="/donate" element={<PageDonate />} />
      </Routes>
    </BrowserRouter>
  );
}

