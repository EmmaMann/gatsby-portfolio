import React, { FC } from "react";

interface IButtonProps {
    /**
     * Classname to apply to button
     */
    className?: string;
    /**
     * Function to execute on click
     */
    onClick: Function;
}

const Button: FC<IButtonProps> = ({ className, onClick, children }) => {
    return (
        <button
            type="submit"
            name="submit"
            className={`self-end px-10 py-3 text-xl lowercase rounded-xl font-header bg-secondary text-neutral shadow-md hover:-translate-y-0.5 transform transition-all ${className}`}
            onClick={(e) => onClick(e)}
        >
            {children}
        </button>
    );
};

export default Button;
export { Button };
