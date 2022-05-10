
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
                <Header2>Games and Computer Graphics</Header2>

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
                                <Link to={`/projects/${project.route}`} key={project.route}
                                    className="
                                    rounded-md
                                    h-[40vh] w-full lg:w-[25vw]
                                    font-print-bold 
                                    text-white text-[6vw] lg:text-[2vw]
                                    bg-cover bg-center
                                    "
                                    style={{
                                        backgroundImage: `url(${project.logo})`
                                    }}
                                >
                                    <div className="h-full w-full bg-black flex items-end p-[2rem]" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                                        <p className="bottom-[2rem] left-[2rem]" style={{ opacity: "1" }}>{project.name}</p>
                                    </div>
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
                                <Link to={`/projects/${project.route}`} key={project.route}
                                    className="
                                    rounded-md
                                    h-[40vh] w-full lg:w-[25vw]
                                    font-print-bold 
                                    text-white text-[6vw] lg:text-[2vw]
                                    bg-cover bg-center
                                    "
                                    style={{
                                        backgroundImage: `url(${project.logo})`
                                    }}
                                >
                                    <div className="h-full w-full bg-black flex items-end p-[2rem]" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                                        <p className="bottom-[2rem] left-[2rem]" style={{ opacity: "1" }}>{project.name}</p>
                                    </div>
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
                                <Link to={`/projects/${project.route}`} key={project.route} className="flex flex-col gap-y-[2vh]">
                                    <p className="font-print-bold text-[4.5vw] lg:text-[2vw]">{ project.name }</p>
                                    <p className="font-print-clearly text-[3.5vw] lg:text-[1.5vw]">{ project.time }</p>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </PageContainer>
    );
}