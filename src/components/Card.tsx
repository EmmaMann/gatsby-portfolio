import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC, useRef } from "react";
import { Heading } from ".";
import { useOnScreen } from "../hooks";

export interface ICardProps {
    /**
     * Animation delay
     */
    delay?: string;
    /**
     * Card description
     */
    description: string;
    /**
     * Image path
     */
    image?: any;
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
    delay,
    description,
    image,
    link,
    newTab = false,
    title,
}) => {
    const cardRef = useRef();
    const isShowing = useOnScreen(cardRef, {
        rootMargin: "",
        threshold: [],
    });
    console.log(isShowing);

    return (
        <div
            ref={cardRef}
            className="relative z-10 transition-all rounded-lg shadow-md hover:scale-102 min-h-96"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-delay={delay || "300"}
        >
            <a
                className="absolute inset-0 z-10"
                href={link}
                target={newTab ? "_blank" : "_self"}
                aria-label={`Launch ${title} Website`}
            />
            <GatsbyImage
                image={image.asset.gatsbyImageData}
                alt={title}
                className="rounded-t-lg"
            />
            <div className="p-6">
                <Heading title={title} headingSize="h3" />
                <p className="pt-3 leading-loose font-body text-dark">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
export { Card };
