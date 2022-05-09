import { useParams } from "react-router-dom";
import { PageTitle } from "../components/pageTitle";
import { LinkedIcon } from "../components/linkedIcon";
import { getProject, getPublication, getWebAndApp } from "../data/projectsData";


export default function Project() {
    let params = useParams()
    let project = getProject(params.projectRoute) || getPublication(params.projectRoute) || getWebAndApp(params.projectRoute)

    return (
        <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
            <div className="flex flex-col gap-y-[1vh] lg:w-[50vw]">
                <div className="h-[10vh]" />

                <div className="flex flex-col gap-y-[10vh]">
                    <PageTitle route={ project.route }>{project.name}</PageTitle>

                    <div>
                        <p className="font-print-clearly lg:text-[2vw]">
                            {project.desc}
                        </p>
                    </div>

                    <LinkedIcon icon={ project.linkIcon } alt="Itch.io icon" href={ project.link }>{ project.callForAction }</LinkedIcon>

                </div>

                <div className="h-[15vh]" />
            </div>
        </div>
    );
}