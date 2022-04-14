
import { MenuButton } from "../menuButton";

export const Menu = ({ handlePageChange, currentPage }) => {

    return(
        <div className="h-[10vh] px-[4vw] flex gap-[1vw] justify-around items-center absolute bottom-0 w-full z-10 bg-dark-blue">
            <MenuButton menu="HOME" handlePageChange={handlePageChange} />
            <MenuButton menu="PROJECTS" handlePageChange={handlePageChange} />
            <MenuButton menu="RESUME" handlePageChange={handlePageChange} />
            <MenuButton menu="CONTACT" handlePageChange={handlePageChange} />
        </div>
    );
}