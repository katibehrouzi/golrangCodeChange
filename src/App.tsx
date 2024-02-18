import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllUsers from './pages/AllUsers';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ShowUser';

function App() {
  return (
    <Layout className="App">
      <Navbar />
      <Content style={{ padding: '48px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/:userId" element={<ViewUser />} />
          <Route path="/users/edit/:userId" element={<EditUser />} />
        </Routes>
      </Content>
      
    </Layout>
  );
}

export default App;
