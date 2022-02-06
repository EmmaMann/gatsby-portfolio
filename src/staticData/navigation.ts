interface IMenuItem {
    /**
     * Display label for menu item
     */
    label: string;
    /**
     * Link or anchor tag to direct to
     */
    href?: string;
}
const navigation: IMenuItem[] = [
    {
        label: "home",
        href: "/",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export default navigation;
export { navigation };
