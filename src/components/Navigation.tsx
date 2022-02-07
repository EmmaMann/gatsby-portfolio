import React, { FC, useState } from "react";
import { Link } from "gatsby";

import { navigation } from "../staticData";

const Navigation: FC<{}> = ({}) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const menuBarClasses = "absolute w-10/12 duration-500 rounded-sm";

    return (
        <div className="w-full">
            <button
                className={`fixed top-4 z-50 h-10 p-1 duration-200 w-11 hover:cursor-pointer mobile-menu block lg:hidden toggle-button`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open Menu"
            >
                <span className="sr-only">Open Menu</span>
                <div
                    className={`${menuBarClasses} top-0 border-t-4 rounded-full border-dark ${
                        menuOpen
                            ? "duration-500 border-chocolate menu-bar-top"
                            : ""
                    }`}
                ></div>
                <div
                    className={`${menuBarClasses} h-1 my-2 bg-dark top-1 ${
                        menuOpen
                            ? "duration-100 opacity-0 bg-chocolate h-screen transform translate-x-96 transition-all"
                            : ""
                    }`}
                ></div>
                <div
                    className={`${menuBarClasses} border-b-4 rounded-full border-dark top-6 ${
                        menuOpen
                            ? "duration-500 border-chocolate menu-bar-bottom"
                            : ""
                    }`}
                ></div>
            </button>
            <div className={`mobile-menu z-40 ${menuOpen ? "menu-show" : ""}`}>
                <nav
                    className={`fixed top-0 bottom-0 lg:bottom-auto lg:left-0 z-40 ${
                        menuOpen
                            ? "left-0 right-20 bg-primary opacity-90 transition-all duration-500"
                            : "-left-96 transition-all duration-100"
                    }`}
                >
                    <ul
                        className={`z-50 flex-col lg:flex-row transition-all gap-y-8 flex lg:py-4 ${
                            menuOpen
                                ? "top-0 bottom-0 right-20 pt-32 m-0 text-xl duration-500 menu-open"
                                : "duration-100 lg:opacity-100 -z-1 menu-closed lg:-left-96"
                        }`}
                    >
                        {navigation?.map((item) => (
                            <li
                                key={`nav-item-${item.href}`}
                                className={`pl-8 text-dark capitalize font-header text-xl`}
                            >
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
export { Navigation };
