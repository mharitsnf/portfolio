import { useParams } from "react-router-dom";
import { PageTitle } from "../components/pageTitle";
import { getProject, getPublication, getWebAndApp } from "../data/projectsData";


export default function Project() {
    let params = useParams()
    let project = getProject(params.projectRoute) || getPublication(params.projectRoute) || getWebAndApp(params.projectRoute)

    return (
        <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
            <div className="flex flex-col gap-y-[1vh] lg:w-[50vw]">
                <div className="h-[10vh]" />

                <div className="flex flex-col gap-y-[10vh]">
                    <div className="flex flex-col">
                        <PageTitle route={project.route}>{project.name}</PageTitle>
                        <p className="font-print-bold text-[4vw] lg:text-[2vw]">{project.time}</p>
                    </div>

                    {
                        project.contents.map((content, i) => {
                            return content(i)
                        })
                    }
                </div>

                <div className="h-[15vh]" />
            </div>
        </div>
    );
}