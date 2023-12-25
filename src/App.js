import './App.css';
import { BrowserRouter ,Router, Route , Routes} from 'react-router-dom'
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
function App() {
  return (
   <div>
    <BrowserRouter>

      <Routes>
        <Route path ="/" exact element={<Login/>}/>
        <Route path ="/dashboard" exact element={<Dashboard/>}/>

      </Routes>
    
    </BrowserRouter>

   </div>
  );
}

export default App;
