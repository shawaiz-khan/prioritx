/* eslint-disable no-undef */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import Completed from './pages/Completed';
import Pending from './pages/Pending';
import NavBar from './components/NavBar';
import Test from './test/Test';
import { LoginProvider } from './contexts/LoginContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Support from './pages/Support';
import Statistics from './pages/Statistics';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LoginProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route index element={<Navigate to='statistics' replace />} />
              <Route path='statistics' element={<Statistics />} />
              <Route path='todo' element={<Tasks />} />
              <Route path='add' element={<AddTask />} />
              <Route path='completed' element={<Completed />} />
              <Route path='pending' element={<Pending />} />
              <Route path='support' element={<Support />} />
            </Route>
            {process.env.NODE_ENV === 'development' && <Route path='/test' element={<Test />} />}
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </LoginProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
