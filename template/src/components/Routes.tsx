import { Navigate, Route, Routes } from 'react-router-dom';
import UserList from './UserList';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
