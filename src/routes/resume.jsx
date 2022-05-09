
import { Header2, Header3 } from "../components/header";
import { PageContainer } from "../components/pageContainer";
import { PageTitle } from "../components/pageTitle";
import { getWorkExperiences, getEducations, getSkills } from "../data/resumeData";

export default function Resume() {
    return (
        <PageContainer>
            <PageTitle>Projects</PageTitle>
            
            <div className="h-[1vh] hidden lg:block" />

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Work Experience</Header2>

                {
                    getWorkExperiences().map( workExperience => {
                        return(
                            <div className="flex flex-col flex-wrap gap-y-[2vh]">
                                <Header3>{ workExperience.title }{ workExperience.company }</Header3>
                                <p className="
                                    font-print-clearly
                                    text-[4.5vw] lg:text-[2vw]
                                ">
                                    { workExperience.subheader }
                                </p>
                                { workExperience.description() }
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Education</Header2>

                {
                    getEducations().map( education => {
                        return(
                            <div className="flex flex-col flex-wrap gap-y-[2vh]">
                                <Header3>{ education.degreeProgram }</Header3>
                                <p className="
                                    font-print-clearly
                                    text-[4.5vw] lg:text-[2vw]
                                ">
                                    { education.university } • { education.time }
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Skills</Header2>

                {
                    getSkills().map( skill => {
                        return(
                            <div className="flex flex-col flex-wrap gap-y-[2vh]">
                                <Header3>{ skill.category }</Header3>
                                <p className={
                                    `font-print-clearly
                                    text-[4.5vw] lg:text-[2vw]
                                    ${skill.subheader ? 'block' : 'hidden'}`
                                }>
                                    { skill.subheader }
                                </p>
                                { skill.content() }
                            </div>
                        )
                    })
                }
            </div>

        </PageContainer>
    );
}