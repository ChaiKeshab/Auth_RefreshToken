import { useState } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import { resetPasswordValidationSchema } from '../ValidationSchema'
import {
    Button,
    PasswordField,
} from '../../../components/index'


const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    interface initialValTypes {
        password: string;
        confirmPassword: string;
    }

    const initialValues: initialValTypes = {
        password: "",
        confirmPassword: ""
    }

    const onFormSubmit = (val: initialValTypes, action: FormikHelpers<initialValTypes>) => {
        console.log(val)
        action.resetForm()
    }


    return (
        <div>

            <div className='flex flex-col items-center justify-center shadow-sm w-[95%] my-12 py-12 px-4 mx-auto bg-white border border-primary rounded-xl
            md:px-14 md:w-[75%] lg:w-[55%] xl:w-[45%]'>

                <h3 className='text-2xl mx-auto md:text-2xl font-bold'>Reset Password</h3>
                <p className='mt-5 text-sm text-center text-[#474D59]'>
                    Your new password must be different from the previous used password.
                </p>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onFormSubmit}
                    validationSchema={resetPasswordValidationSchema}
                >
                    {() => (
                        <Form className='w-full'>

                            <div className='mt-12'>
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
                                className='mt-12 rounded-lg text-white w-full px-10 py-3 bg-primary'
                                type='submit'
                                label={'Reset Password'}
                            />
                        </Form>
                    )}

                </Formik>

            </div>
        </div>
    )
}

export default ResetPassword