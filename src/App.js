import './App.css';
import AddUser from './components/Adduser';
import Table from "./components/Table.js";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Table />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/updateUSer:id' element={<AddUser />} />
      </Routes>
    </div>
  );
}
export default App;
