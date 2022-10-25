import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Shared/Navbar/Home/Home';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div>
    
    <Navbar></Navbar>
    <Home></Home>
      
     <Toaster />
    </div>
  );
}

export default App;
