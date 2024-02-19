import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";


interface ProtectedRouteType {
    isAllowed?: boolean;
    redirectPath?: string;
    children?: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteType> = ({
    isAllowed,
    redirectPath = '/auth/login',
    children,
}) => {

    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute