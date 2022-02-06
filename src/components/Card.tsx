import { Link } from "gatsby";
import React, { FC } from "react";
import { Heading } from ".";

export interface ICardProps {
    /**
     * Card description
     */
    description: string;
    /**
     * Image path
     */
    image: { src: string; alt: string };
    /**
     * Link to redirect to
     */
    link?: string;
    /**
     * Should the link open in a new tab?
     */
    newTab?: boolean;
    /**
     * Title for card
     */
    title: string;
}

const Card: FC<ICardProps> = ({
    description,
    image,
    link,
    newTab = false,
    title,
}) => {
    return (
        <div className="relative transition-all rounded-lg shadow-md hover:scale-102">
            <Link
                className="absolute inset-0"
                to={link}
                target={newTab ? "_blank" : "_self"}
                aria-label="Launch Website"
            />
            <img src={image.src} alt={image.alt} className="rounded-t-lg" />
            <div className="p-6">
                <Heading title={title} headingSize="h3" />
                <p className="pt-3 leading-loose font-body text-chocolate">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
export { Card };
