
import { useRef, useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi, logoutApi } from '../../api/authApi'
import Button from '../../components/Button/Button'

const Login = () => {
    const userRef = useRef<HTMLInputElement>(null)
    const errRef = useRef<HTMLParagraphElement>(null)
    const [user, setUser] = useState('Aa$12345')
    const [pwd, setPwd] = useState('Aa$12345')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        userRef.current?.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        console.log('first')
        try {
            await loginApi({ user, pwd })
            // setUser('')
            // setPwd('')
            navigate('/welcome')

            //     "user": "Aa$12345",
            //     "pwd": "Aa$12345"

        } catch (error) {
            console.log(error)
            errRef.current?.focus();
        }
    }

    const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => setUser(e.target.value)
    const handlePwdInput = (e: ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)

    const handleLogout = async () => {
        try {
            await logoutApi()
        } catch (error) {
            console.error(error)
        }
    }

    return (

        <div className='mt-4 px-4 duration-300 md:px-6 lg:px-14 py-6 space-y-4 mx-auto w-fit bg-[#FAFAFA] rounded-md shadow-[1px_1px_5px_rgba(0,0,0,0.3)]'>
            <section className="login space-y-4">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <h1>Login</h1>


                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-start gap-4'>

                    <div className='flex justify-between items-center gap-3 w-full'>
                        <label htmlFor="username">Username:</label>
                        <input
                            className='border rounded-md outline-none px-3 py-1'
                            type="text"
                            id="username"
                            ref={userRef}
                            value={user}
                            onChange={handleUserInput}
                            autoComplete="off"
                            required
                        />
                    </div>


                    <div className='flex justify-between items-center gap-3 w-full'>
                        <label htmlFor="password">Password:</label>
                        <input
                            className='border rounded-md outline-none px-3 py-1'
                            type="password"
                            id="password"
                            onChange={handlePwdInput}
                            value={pwd}
                            autoComplete='current-password'
                            required
                        />
                    </div>

                    <Button
                        className='border px-2 py-1 bg-blue-600 rounded-lg text-white'
                        type='submit'
                    >Sign In
                    </Button>
                </form>
            </section>

            <Button
                className='border px-2 py-1 bg-red-600 rounded-lg text-white'
                type='button'
                onClick={handleLogout}
            >Logout
            </Button>
        </div>
    )
}
export default Login
