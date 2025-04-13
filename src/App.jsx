import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Settings from './components/Settings';
import Header from './components/Header';
import DealOverview from './components/DealOverview';

import Workshop from './components/Workshop';
import Pipeline from './components/Pipeline';
import Home from './components/Home';
import UploadDeal from './components/UploadDeal';
function App() {
  return (

    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      
      <Route path='/' element={<UploadDeal />}/>
      <Route path='/dealsoverview' element={<DealOverview />}/>
      <Route path='/workshop' element={<Workshop />}/>
      <Route path='/pipeline' element={<Pipeline />}/>
      <Route path='/settings/*' element={<Settings />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;