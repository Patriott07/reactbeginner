
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {

    /**
     * Pada kasus kali ini kita hanya ingin mengecek apakah user sudah login
     * menggunakan localStorage 
     * */
    let isHasLogin = localStorage.getItem('login');
    return isHasLogin ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute;
