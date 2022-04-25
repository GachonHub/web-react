import './App.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/error/NotFound';
import {Profile} from './components/profile/Profile'


function App() {
  return (
    <div>
      <BrowserRouter> 
        <Header></Header>
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
