import * as Yup from 'yup'


export const signUpValidationSchema = Yup.object({
    firstName: Yup.string()
        .max(20)
        .required("Enter your First Name"),

    lastName: Yup.string()
        .max(20)
        .required("Enter your Last Name"),

    email: Yup.string()
        .email()
        .required("Please enter your Email"),

    password: Yup.string()
        .min(6)
        .required("Please enter your password"),

    confirmPassword: Yup.string()
        .required("Please re-enter your password")
        .oneOf([Yup.ref('password'), ''], "Password must match"),
})


export const logInValidationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
})


export const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
})


export const resetPasswordValidationSchema = Yup.object({
    password: Yup.string()
        .min(6)
        .required("Please enter your password"),

    confirmPassword: Yup.string()
        .required('Please re-enter your password')
        .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
})