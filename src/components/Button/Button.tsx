import { FC, ButtonHTMLAttributes } from 'react';


const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    disabled = false,
    className,
    children,
    ...rest
}) => {
    return (
        <button
            disabled={disabled}
            className={`${className} ${!disabled && 'cursor-pointer'} transition-all duration-150 disabled:bg-secondary disabled:text-primary`}
            {...rest}
        >
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