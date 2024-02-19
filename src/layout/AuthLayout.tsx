import { Outlet } from 'react-router-dom'
import testImg from '../assets/react.svg'


const AuthLayout = () => {


    return (
        <div>
            <div className='flex mt-4 justify-center items-center'>
                <div
                    className='w-20 aspect-square'
                >
                    <img src={testImg} className='w-full h-full object-contain' alt="" />
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default AuthLayout