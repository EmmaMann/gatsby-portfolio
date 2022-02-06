import React, { FC } from "react";

const Row: FC<{ className?: string; rowId?: string }> = ({
    className = "",
    children,
    rowId = "",
}) => {
    return (
        <div
            className={`${className} container mx-auto px-4 md:px-12`}
            id={rowId}
        >
            {children}
        </div>
    );
};

export default Row;
export { Row };
