import { FC, ReactNode } from "react";

interface ErrorProps {
    children?: ReactNode
}

const TextError: FC<ErrorProps> = ({ children }) => {
    return <div className="whitespace-nowrap text-red-500 text-xs">{children}</div>;
};

export default TextError;
