import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectRoutes = ({ children, role }) => {
    const user = useSelector((state) => state?.user?.user);
    
    if (!user) return <Navigate to="/login" replace/>
    if (user?.role !== role) return <Navigate to="/" />

    return children;
}

export default ProtectRoutes
