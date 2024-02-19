import { Formik, Form, FormikHelpers } from 'formik'
import { forgotPasswordValidationSchema } from '../ValidationSchema'
import { useNavigate } from 'react-router-dom'
import {
    Button,
    TextField
} from '../../../components/index'


const Login = () => {

    const navigate = useNavigate()

    interface initialValTypes {
        email: string;
    }

    const initialValues: initialValTypes = {
        email: ""
    }

    const onFormSubmit = (val: initialValTypes, action: FormikHelpers<initialValTypes>) => {
        console.log(val)
        action.resetForm()
    }


    return (
        <div>

            <div className='flex flex-col items-center justify-center shadow-sm w-[95%] my-12 py-12 px-4 mx-auto bg-white border border-primary rounded-xl
            md:px-14 md:w-[75%] lg:w-[55%] xl:w-[45%]'>


                <h3 className='text-2xl mx-auto md:text-2xl font-semibold'>Forgot Password</h3>
                <p className='mt-5 text-center text-sm text-[#474D59]'>
                    Enter your registered Email below to receive password reset instructions
                </p>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onFormSubmit}
                    validationSchema={forgotPasswordValidationSchema}
                >
                    {() => (
                        <Form className='w-full'>

                            <div className='mt-12'>
                                <TextField
                                    label="Email Address"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    autoComplete={'username'}
                                />
                            </div>


                            <Button
                                onClick={() => navigate("/auth/otp")}
                                className='mt-12 rounded-lg text-white w-full px-10 py-4 bg-primary'
                                type='submit'
                                label={'Request OTP'}
                            />

                            <Button
                                onClick={() => navigate("/auth/login")}
                                className='mt-2 rounded-lg text-secondary w-full px-10 py-4 bg-white'
                                type='submit'
                                label={'Back to Login'}
                            />
                        </Form>
                    )}

                </Formik>

            </div>
        </div>
    )
}

export default Login