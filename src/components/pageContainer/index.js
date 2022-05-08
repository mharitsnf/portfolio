import { Home } from "../../pages/home";
import { Projects } from "../../pages/projects";
import { Resume } from "../../pages/resume";
import { Contact } from "../../pages/contact";
import { useEffect } from "react";

export const PageContainer = ({ currentPage }) => {
    const displayPage = (page) => {
        if (page === "PROJECTS") return <Projects/>
        if (page === "RESUME") return <Resume/>
        if (page === "CONTACT") return <Contact/>
        return <Home/>
    }

    return (
        <div className="h-[90vh]" >
            {displayPage(currentPage)}
        </div>
    );
}