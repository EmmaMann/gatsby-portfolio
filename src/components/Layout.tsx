import React, { FC } from "react";
import "../styles/global.css";
import { Navigation } from ".";
import { Helmet } from "react-helmet";

import "@fontsource/comfortaa";
import "@fontsource/poppins";

const Layout: FC<{ title?: string; description?: string }> = ({
    title,
    description,
    children,
}) => {
    return (
        <>
            <Helmet>
                <title>{title || "Emma Mann | Web Developer"}</title>
                <meta
                    name="description"
                    content={
                        description ||
                        "Emma is an accomplished Front End web developer, with experience using React, NextJS, Gatsby, TailwindCSS and more."
                    }
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Helmet>
            <main className="font-body text-dark">
                <Navigation />
                {children}
            </main>
        </>
    );
};

export default Layout;
export { Layout };
