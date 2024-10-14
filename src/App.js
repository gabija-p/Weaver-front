import SignUp from './components/screens/SignUp.jsx';
import Home from './components/screens/Home.jsx';
import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={<Home />} />
        <Route path="/signup"
          element={<SignUp />} />
      </Routes>
    </div>
  );

}

export default App;
