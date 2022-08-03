
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import Airdrop from './Component/Pages/Airdrop/Airdrop';
import Redeem from './Component/Pages/Redeem/Redeem';
import Farms from './Component/Pages/Farms/Farms';
import Mint from './Component/Pages/Mint/Mint';
import Staking from './Component/Pages/Staking/Staking';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/mint" element={<Mint/>}/>
        <Route path="/redeem" element={<Redeem/>}/>
        <Route path="/farms" element={<Farms/>}/>
        <Route path="/staking" element={<Staking/>}/>
        <Route path="/airdrop" element={<Airdrop/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
