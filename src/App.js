import './App.css';
import Navbar from './Components/Navbar';
import CompBody from './Components/CompBody';
import Cart from './Components/Cart';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App flex flex-col  justify-center items-center gap-2">
      <Navbar/>
      <Routes>
        <Route path="/" element={<CompBody/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
