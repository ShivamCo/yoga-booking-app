import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import NavigationBar from './components/Navigation';
import Footer from './components/Footer';

//Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExplorePage from './pages/ExplorePage';
import ProfilePage from './pages/ProfilePage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/explore' element={<ExplorePage/>} />
      <Route path='/user-profile' element={<ProfilePage/>} />
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default App
