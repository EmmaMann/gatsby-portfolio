import React from "react";
import Layout from "./src/components";

export function wrapPageElement({ element, props }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Layout {...props}>{element}</Layout>;
}
