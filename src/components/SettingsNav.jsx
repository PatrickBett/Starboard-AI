import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Models from './Models';
import Account from './Account';
import DealCriteria from './DealCriteria';
function SettingsNav() {
  return (
    <div>
         <Routes>
            <Route path='account' element={<Account/>}/>
            <Route path='dealcriteria' element={<DealCriteria/>}/>
            <Route path='models' element={<Models/>}/>
          </Routes>
    </div>
  )
}

export default SettingsNav