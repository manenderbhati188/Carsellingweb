import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage'
import Cardetail from './Pages/CarDetail'
import Login from './components/Login';
export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Home' element={<Homepage/>}/>
        <Route path="/Cardetail/:carname"element={<Cardetail/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  )
}