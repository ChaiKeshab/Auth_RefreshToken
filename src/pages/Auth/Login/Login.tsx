import { useState } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import { logInValidationSchema } from '../ValidationSchema'
import { Link, useNavigate } from 'react-router-dom'


import {
    Button,
    PasswordField,
    TextField
} from '../../../components/index'


interface LoginValues {
    email: string;
    password: string;
}


const Login = () => {

    const initialValues: LoginValues = {
        email: "",
        password: ""
    }

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);


    const onFormSubmit = (val: LoginValues, actions: FormikHelpers<LoginValues>) => {
        console.log(val)
        actions.resetForm()
    }


    return (
        <div className='text-primary'>

            <div className='flex flex-col shadow-sm w-[95%] my-12 mx-auto bg-secondary border border-primary rounded-xl
            md:flex-row lg:w-[75%]'>

                <div className='w-full p-5 pb-10 lg:p-10 md:w-full:'>

                    <div className='flex items-center justify-start gap-3 flex-wrap'>
                        <h3 className='text-xl md:text-2xl font-semibold'>Log into you account</h3>
                        <div className='hidden md:block border-l border-primary h-10'></div>
                        <div className='text-sm'>RequiredFields *</div>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={onFormSubmit}
                        validationSchema={logInValidationSchema}
                    >
                        {() => (
                            <Form>

                                <div className='mt-12'>
                                    <TextField
                                        label="Email Address"
                                        name="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        autoComplete={'username'}
                                    />
                                </div>

                                <div className='mt-5'>
                                    <PasswordField
                                        label="Password"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        type={`${showPassword ? "text" : "password"}`}
                                        setShowPassword={setShowPassword}
                                        showPassword={showPassword}
                                    />
                                </div>



                                <Link to={"/auth/forgotpassword"} className='w-fit block'>
                                    <p className="text-sm font-semibold my-4 w-fit hover:text-secondary hover:underline">
                                        Forgot Password?
                                    </p>
                                </Link>



                                <Button
                                    className='mt-8 rounded-lg text-white w-full px-10 py-3 bg-button hover:bg-hover'
                                    type='submit'
                                    label={'Sign in'}
                                />
                            </Form>
                        )}

                    </Formik>

                </div>


            </div>

        </div>
    )
}

export default Login