
import { MenuButton } from "../menuButton";

export const Menu = () => {
    return(
        <div className="h-[10vh] flex gap-[1vw] justify-around items-center absolute bottom-0 w-full z-10 bg-dark-blue">
            <MenuButton menu="HOME" />
            <MenuButton menu="PROJECTS" />
            <MenuButton menu="RESUME" />
            <MenuButton menu="CONTACT" />
        </div>
    );
}