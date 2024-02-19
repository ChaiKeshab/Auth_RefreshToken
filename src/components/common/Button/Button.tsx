import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps {
    label?: string;
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
    label,
    onClick,
    disabled = false,
    type = 'button',
    className,
    children
}) => {


    return (
        <button
            disabled={disabled}
            type={type}
            className={`${className} ${!disabled && 'cursor-pointer'} transition-all duration-150 disabled:bg-secondary disabled:text-primary`}
            onClick={onClick}
        >
            {label && <span>{label}</span>}
            {children}
        </button>
    );
};

export default Button;

/*

Difference between functional programming and object-oriented programming.

Is javascript a statically typed or a dynamically typed language?

In CSS, what is a z-index?



In CSS, how does the property visibility and display affects the layout of the DOM?

What is type inference? Does Javascript has type inference?

Difference between “ == “ and “ === “ operators.

What do you mean when you say the value of a variable is null?

What is hoisting in Javascript?


JavaScript has garbage collection.
*/