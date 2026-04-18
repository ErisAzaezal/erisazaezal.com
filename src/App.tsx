import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.less';

import Layout from "./layout/layout"
import FrontPage from "./content/frontpage/frontpage";
import WritingIndex from './content/writing/index';
import WorldBuildingIndex from './content/worldbuilding/index';
import AudioIndex from './content/audio/index';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<FrontPage />} />
            <Route path="writing">
              <Route index element={<WritingIndex />} />
            </Route>
            <Route path="worldbuilding">
              <Route index element={<WorldBuildingIndex />} />
            </Route>
            <Route path="audios">
              <Route index element={<AudioIndex />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
