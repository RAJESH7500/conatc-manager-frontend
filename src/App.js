import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router';
import SignUp from './components/SignUp';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
