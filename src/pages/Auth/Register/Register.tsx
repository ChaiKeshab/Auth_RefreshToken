import { useState } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import { signUpValidationSchema } from '../ValidationSchema'

import {
    Button,
    PasswordField,
    TextField,
} from '../../../components/index'

import { useNavigate } from 'react-router-dom'


interface RegisterTypes {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    image: File | null;
}

const Register = () => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const initialValues: RegisterTypes = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: null,
    };





    const onFormSubmit = async (values: RegisterTypes, { resetForm }: FormikHelpers<RegisterTypes>) => {
        console.log(values)
        resetForm();
    };

    return (
        <div className='text-primary'>

            <div className='flex flex-col divide-x shadow-sm w-[95%] my-12 mx-auto bg-secondary border border-primary rounded-xl
                md:flex-row lg:w-11/12 xl:w-3/4'>

                <div className='w-full p-5 pb-10 lg:p-10 md:w-full border-primary'>

                    <div className='flex items-center justify-start gap-3 flex-wrap'>
                        <h3 className='text-xl md:text-2xl font-semibold'>Create your account</h3>
                        <div className='hidden md:block border-l border-primary h-10'></div>
                        <div className='text-sm'>RequiredFields *</div>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={onFormSubmit}
                        validationSchema={signUpValidationSchema}
                    >
                        {() => (
                            <Form>


                                <div className='mt-12 flex flex-col lg:flex-row gap-y-5 gap-x-3 w-full'>
                                    <TextField
                                        label="First Name *"
                                        name="firstName"
                                        placeholder="First Name"
                                        type="text"
                                    />

                                    <TextField
                                        label="Last Name *"
                                        name="lastName"
                                        placeholder="Last Name"
                                        type="text"
                                    />
                                </div>

                                <div className='mt-5'>
                                    <TextField
                                        label="Email Address *"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        autoComplete={'username'}
                                    />
                                </div>


                                <div className='mt-5'>
                                    <PasswordField
                                        label="Password *"
                                        name="password"
                                        placeholder="Password"
                                        type={`${showPassword ? "text" : "password"}`}
                                        setShowPassword={setShowPassword}
                                        showPassword={showPassword}
                                    />
                                </div>

                                <div className='mt-5'>
                                    <PasswordField
                                        label="Confirm Password *"
                                        name="confirmPassword"
                                        placeholder="Password"
                                        type={`${showConfirmPassword ? "text" : "password"}`}
                                        setShowPassword={setShowConfirmPassword}
                                        showPassword={showConfirmPassword}
                                    />
                                </div>


                                <Button
                                    className='mt-8 rounded-lg text-white w-full px-10 py-3 bg-button hover:bg-hover'
                                    type='submit'
                                    label={'Sign up'}
                                />
                            </Form>
                        )}

                    </Formik>

                </div>

            </div>

        </div>
    )
}

export default Register