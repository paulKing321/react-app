import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetUps';
import Favorites from './pages/Favorites';
import NewMeetUpsPage from './pages/NewMeetUps';
import MyTodos from './pages/MyTodos';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetUpsPage />} />
        <Route path='new-meetup' element={<NewMeetUpsPage />} />
        <Route path='favorites'element={<Favorites />} />
        <Route path='todos'element={<MyTodos />} />
      </Routes>
    </div>
  );
}

export default App;
