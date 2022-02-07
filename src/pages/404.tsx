import { Link } from "gatsby";
import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-8 squares-bg">
            <h1 className="text-6xl font-header text-secondary">
                Page not found!
            </h1>
            <Link
                to="/"
                className="flex text-xl transition-all text-dark anim-arrow gap-x-1 hover:gap-x-2"
            >
                Head back home <span>&rarr;</span>
            </Link>
        </div>
    );
}

export { NotFound };
