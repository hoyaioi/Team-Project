import { useNavigate, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => { 
  const isLogin = !!sessionStorage.getItem("token");
  const navigate = useNavigate();

//  return isLogin ? children : (alert("접근 권한이 없습니다."), <Navigate to="/" />);

if (isLogin) 
    return children;
  else {
    alert("접근 권한이 없습니다.");
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;