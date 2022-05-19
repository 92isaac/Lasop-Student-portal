import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sign_Up from './components/Sign_Up';

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route exact path="/" element={<Sign_Up />} />
    {/* <Route path="/chart" element={<Chart />} /> */}
  </Routes>
  </Router>
    </div>
  );
}

export default App;
