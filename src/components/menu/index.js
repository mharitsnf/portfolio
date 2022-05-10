import { MenuButton } from "../menuButton";

export const Menu = () => {
    return(
        <div className="h-[10vh] px-[4vw] flex gap-[1vw] justify-around items-center absolute bottom-0 w-full z-10 bg-dark-blue">
            <MenuButton menu="HOME" route="/" />
            <MenuButton menu="PROJECTS" route="/projects" />
            <MenuButton menu="RESUME" route="/resume" />
            <MenuButton menu="CONTACT" route="/contact" />
        </div>
    );
}