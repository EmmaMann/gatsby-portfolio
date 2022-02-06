import React, { FC, ReactNode } from "react";

type headingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IHeadingProps {
    title: string;
    headingSize: headingSize;
    className?: string;
}

const Heading: FC<IHeadingProps> = ({ title, headingSize, className = "" }) => {
    let component: ReactNode = <></>;

    switch (headingSize) {
        case "h1":
            component = <h1 className="font-header text-secondary">{title}</h1>;
            break;
        case "h2":
            component = (
                <h2
                    className={`pb-4 text-3xl font-bold font-header text-secondary lg:text-4xl ${className}`}
                >
                    {title}
                </h2>
            );
            break;
        case "h3":
            component = (
                <h3 className="text-lg lg:text-2xl font-header text-secondary">
                    {title}
                </h3>
            );
            break;
        case "h4":
            component = <h4>{title}</h4>;
            break;
        case "h5":
            component = <h5>{title}</h5>;
            break;
        case "h6":
            component = <h6>{title}</h6>;
            break;
        default:
            component = (
                <h2
                    className={`pb-4 text-3xl font-bold font-header text-secondary lg:text-4xl ${className}`}
                >
                    {title}
                </h2>
            );
            break;
    }

    return component;
};

export default Heading;
export { Heading };
