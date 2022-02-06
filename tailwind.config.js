module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    content: [],
    theme: {
        extend: {
            colors: {
                primary: "#EF9F2D",
                secondary: "#7AB19D",
                chocolate: "#BE5A32",
                dark: "#3B1B10",
                neutral: "#FBFAF9",
            },
            fontFamily: {
                header: "Comfortaa",
                body: "Poppins",
            },
            scale: {
                102: "1.02",
            },
            zIndex: {
                "-1": "-1",
            },
        },
    },
    plugins: [],
};
