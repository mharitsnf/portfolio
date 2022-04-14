import { Home } from "../../pages/home";
import { Projects } from "../../pages/projects";
import { Resume } from "../../pages/resume";
import { Contact } from "../../pages/contact";
import { useState } from "react";

export const PageContainer = ({ currentPage }) => {

    const displayPage = (currentPage) => {
        if (currentPage == "PROJECTS") return <Projects/>
        if (currentPage == "RESUME") return <Resume/>
        if (currentPage == "CONTACT") return <Contact/>
        return <Home/>
    }

    return (
        <div className="h-[90vh]" >
            {displayPage(currentPage)}
        </div>
    );
}