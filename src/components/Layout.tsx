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
                <script
                    type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"
                ></script>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: ` (function () {
                    emailjs.init("user_lpqHRPa7AJz66qRj64Xw1");
                  })();`,
                    }}
                ></script>
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
