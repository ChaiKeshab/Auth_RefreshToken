import { Link, Route, Routes } from 'react-router-dom'

import Login from './pages/Auth/Login'
import Welcome from './pages/Welcome'
import UsersList from './pages/UsersList'
import RequireAuth from './layout/RequireAuth'
import CopyToClipboard from './components/CopyToClipboard '
import Home from './pages/Home/Home'


const App = () => {

    return (
        <>
            <div className='p-4'>
                <CopyToClipboard textToCopy={'Aa$12345'} />
            </div>
            <div className='px-4 py-2 border-b flex justify-start items-center gap-3'>
                <Link className='px-3 py-1 rounded-md bg-teal-300 shadow' to='/'>Home</Link>
                <Link className='px-3 py-1 rounded-md bg-teal-300 shadow' to="/userslist">Users</Link>
                <Link className='px-3 py-1 rounded-md bg-teal-300 shadow' to='/login'>Login</Link>
                <Link className='px-3 py-1 rounded-md bg-teal-300 shadow' to='/welcome'>welcome</Link>

            </div>

            <div className='space-y-2 my-4 px-4'>
                <div>Mininal setup for "JWT with refresh token rotation</div>
                <div>Do update the api endpoints and methods with ur backend req</div>
            </div>

            <Routes>

                {/* public routes */}
                <Route path="/login" element={<Login />} />

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path='/' element={<Home />} />
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="userslist" element={<UsersList />} />
                </Route>

            </Routes>
        </>
    )
}

export default App