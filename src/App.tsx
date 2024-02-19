import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
} from "./pages/index";

import AuthLayout from './layout/AuthLayout'
import { ProtectedRoute } from './components/index'


const App = () => {

  const user = false;

  return (
    <div className="flex flex-col h-screen text-primary">
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;