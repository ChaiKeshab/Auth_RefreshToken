import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { tokenStore } from "../api/baseConfig";
import { refreshApi } from "../api/authApi";

const RequireAuth = () => {
    const location = useLocation();

    // use state management like redux, context etc for prod instead of tokenStore.
    const [token, setToken] = useState<string | null>(tokenStore.get());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                const newToken = await refreshApi();
                if (newToken) setToken(newToken);
            }
            setLoading(false);
        };
        checkAuth();
    }, [token]);

    if (loading) {
        return <div>Loading session...</div>;
    }

    if (!token) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return <Outlet />;
};


export default RequireAuth;
