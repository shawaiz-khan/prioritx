import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/setting' element={<Settings />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/todo' element={<Tasks />} />
        <Route path='/dashboard/todo/add' element={<AddTask />} />
        <Route path='/dashboard/completed' element={<Completed />} />
        <Route path='/dashboard/pending' element={<Pending />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App