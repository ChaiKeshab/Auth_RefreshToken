import { ReactNode, FC, Dispatch, SetStateAction, InputHTMLAttributes } from 'react';
import { ErrorMessage, Field } from "formik";
import { TextError } from "../../index";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface PasswordProps {
    label: ReactNode;
    optional?: ReactNode;
    name: string;
    flag?: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
    showPassword: boolean;
}

const PasswordField: FC<PasswordProps & InputHTMLAttributes<HTMLInputElement>> = ({
    label,
    placeholder,
    name,
    showPassword,
    setShowPassword,
    ...rest
}) => {
    return (
        <div className="text-sm">
            <label
                htmlFor={name}
                className="pb-2 flex text-sm items-center justify-between"
            >
                {label} <ErrorMessage name={name} component={TextError} />
            </label>

            <div className="flex justify-between items-center relative">
                <Field
                    id={name}
                    name={name}
                    autoComplete={'current-password'}
                    {...rest}
                    className="bg-input outline-none w-full px-3 py-3 text-sm rounded-lg"
                    placeholder={placeholder}
                />
                <div
                    className="absolute right-4 opacity-40"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <AiFillEyeInvisible size={20} />
                    ) : (
                        <AiFillEye size={20} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PasswordField;
