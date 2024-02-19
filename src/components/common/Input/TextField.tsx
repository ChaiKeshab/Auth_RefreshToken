import { FC, InputHTMLAttributes, ReactNode } from "react";
import { ErrorMessage, Field } from "formik";
import { TextError } from "../../index";

interface InputFieldProps {
    label: ReactNode;
    optional?: ReactNode;
    name: string;
    flag?: boolean;
    autoComplete?: string
}


const InputField: FC<InputFieldProps & InputHTMLAttributes<HTMLInputElement>> = ({
    label,
    placeholder,
    optional,
    name,
    flag = false,
    autoComplete,
    ...rest
}) => {
    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className="pb-2 flex text-sm items-center justify-between"
            >
                <div className="flex whitespace-nowrap items-center justify-between gap-x-3 w-full">
                    <div>{label}</div>
                    <ErrorMessage name={name} component={TextError} />
                    {optional && (
                        <div className="text-[#5D6B82] text-sm">{optional}</div>
                    )}
                </div>
            </label>

            {flag ? (
                <div className="w-full bg-input flex items-center rounded-lg">
                    <Field
                        as="select"
                        name="callingCode"
                        className="rounded-l-lg rounded-r-none border-r text-sm bg-input outline-none w-fit h-full px-3 py-3"
                    >
                        <option value="977"> +977</option>
                        <option value="61"> +61</option>
                    </Field>

                    <Field
                        id={name}
                        name={name}
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        {...rest}
                        className="rounded-r-lg rounded-l-none w-full h-full px-3 py-3 text-sm bg-input outline-none"
                        placeholder={placeholder}
                    />
                </div>
            ) : (
                <Field
                    id={name}
                    name={name}
                    {...rest}
                    autoComplete={autoComplete}
                    className="bg-input outline-none w-full px-3 py-3 text-sm rounded-lg"
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default InputField;
