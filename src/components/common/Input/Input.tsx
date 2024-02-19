import { FC, InputHTMLAttributes } from 'react';


const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
    id,
    type = 'text',
    placeholder,
    value,
    onChange,
    onKeyDown,
    className,
    ...rest
}) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className={`${className} outline-none`}
            {...rest}
        />
    );
};

export default Input;
