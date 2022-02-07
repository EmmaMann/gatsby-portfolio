import React, { FC, useRef, useState } from "react";
import { Row } from ".";
import useOnScreen from "../hooks/useOnScreen";

const HomeHeader: FC<{}> = ({}) => {
    const scrollRef = useRef();
    const isScrolled = !useOnScreen(scrollRef, {});

    return (
        <>
            <div ref={scrollRef} className="absolute top-0 w-full h-px"></div>
            <div
                className={`z-30 flex flex-col justify-end h-screen transition-all duration-700  squares-bg ${
                    isScrolled ? "scrollHeader" : ""
                }`}
            >
                <Row>
                    <h1
                        className={`font-bold text-right transition-all duration-700 font-header text-secondary ${
                            isScrolled ? "py-2" : ""
                        }`}
                    >
                        emma
                    </h1>
                    <h2 className="pb-8 text-xl text-right text-chocolate">
                        web design | development
                    </h2>
                </Row>
            </div>
        </>
    );
};

export default HomeHeader;
export { HomeHeader };
