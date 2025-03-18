import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
