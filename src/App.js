import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import './output.css';
import { Navigate } from 'react-router-dom';
import Home from './Page/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}></Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
