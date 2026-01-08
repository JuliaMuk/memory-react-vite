import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './assets/style.css';
import { GamePage,FirstPage } from './pages';


function App() {  
  return (

    <BrowserRouter basename="/memory-react-vite">
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/game" element={<GamePage/>} />              
        <Route path="*" element={<FirstPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
