import { Link } from "react-router-dom";

export const MenuButton = ({ menu, route }) => {
    return (
        <div className="text-white font-print-clearly h-min text-[4vw] md:text-[1.5vw]" >
            <Link to={route}>{menu}</Link>
        </div>
    );
}