
import { Header2 } from "../components/header";
import { getProjects, getWebAndApps, getPublications } from "../data/projectsData";
import { PageTitle } from "../components/pageTitle";
import { Link } from "react-router-dom";
import { PageContainer } from "../components/pageContainer";

export default function Projects() {
    return (
        <PageContainer>
            <PageTitle>Projects</PageTitle>
            <div className="h-[1vh] hidden lg:block" />

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Games</Header2>

                <div className="
                            flex
                            flex-col lg:flex-row
                            flex-wrap
                            gap-y-[15vh] lg:gap-y-[8vh] lg:gap-x-[8vw]
                            w-full lg:w-auto
                        ">
                    {
                        getProjects().map(project => {
                            return (
                                <Link to={`/projects/${project.route}`} key={project.route} className="
                                        bg-white rounded-md
                                        h-[40vh] w-full lg:w-[25vw]
                                        flex justify-center items-end 
                                        px-[4vw] py-[2vh]
                                        font-print-clearly 
                                        text-black text-[6vw] lg:text-[2vw]
                                    ">
                                    { project.name }
                                </Link>
                            );
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Webs and Apps</Header2>

                <div className="
                            flex
                            flex-col lg:flex-row
                            flex-wrap
                            gap-y-[15vh] lg:gap-y-[10vh] lg:gap-x-[5vw]
                            w-full lg:w-auto
                        ">
                    {
                        getWebAndApps().map(project => {
                            return (
                                <Link to={`/projects/${project.route}`} key={project.route} className="
                                        bg-white rounded-md
                                        h-[40vh] w-full lg:w-[25vw]
                                        flex justify-center items-end 
                                        px-[4vw] py-[2vh]
                                        font-print-clearly 
                                        text-black text-[6vw] lg:text-[2vw]
                                    ">
                                    {project.name}
                                </Link>
                            );
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Publications</Header2>

                <div className="
                            flex
                            flex-col lg:flex-row
                            flex-wrap
                            gap-y-[15vh] lg:gap-y-[10vh] lg:gap-x-[5vw]
                            w-full lg:w-auto
                        ">
                    {
                        getPublications().map(project => {
                            return (
                                <Link to={`/projects/${project.route}`} key={project.route} className="
                                        bg-white rounded-md
                                        h-[40vh] w-full lg:w-[25vw]
                                        flex justify-center items-end 
                                        px-[4vw] py-[2vh]
                                        font-print-clearly 
                                        text-black text-[6vw] lg:text-[2vw]
                                    ">
                                    {project.name}
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </PageContainer>
    );
}