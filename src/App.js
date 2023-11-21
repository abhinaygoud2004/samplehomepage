import { BrowserRouter as Router } from 'react-router-dom'
import RootLayout from './components/RootLayout';
import './App.css';

function App() {
  return (
    <div className="">
      <Router>
        <RootLayout />
      </Router>
    </div>
  );
}

export default App;
