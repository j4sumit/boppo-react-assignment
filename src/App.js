import './App.css';
import AddUser from './components/Adduser';
import Table from "./components/Table.js";

import { Routes, Route } from 'react-router-dom';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Table />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/update' element={<UpdateUser />} />
      </Routes>
    </div>
  );
}
export default App;
