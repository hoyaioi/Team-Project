import { Navigate } from "react-router-dom"

const AdminRouter = ({ children }) => {
    const admin = !!sessionStorage.getItem("token")

    if (admin) {
        return children
    } else {
        alert("관리자만 접근 가능한 페이지입니다.")
        return <Navigate to="/" />
    }


}

export default AdminRouter;