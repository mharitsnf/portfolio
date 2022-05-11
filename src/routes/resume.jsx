
import { Header2, Header3 } from "../components/header";
import { PageContainer } from "../components/pageContainer";
import { PageTitle } from "../components/pageTitle";
import { getWorkExperiences, getEducations, getSkills } from "../data/resumeData";
import { LinkedIcon } from "../components/linkedIcon";
import PDFIcon from "../images/pdf-file.png"
import CV from "../data/CV Harits Nur Fauzan.pdf"

export default function Resume() {
    return (
        <PageContainer>
            <div className="flex flex-col gap-y-[2vh]">
                <PageTitle>Resume</PageTitle>
                <LinkedIcon href={CV} icon={PDFIcon} alt="PDF Icon" >Get PDF version</LinkedIcon>
            </div>

            <div className="h-[1vh] hidden lg:block" />

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Work Experience</Header2>

                {
                    getWorkExperiences().map((workExperience, i) => {
                        return (
                            <div key={i} className="flex flex-col flex-wrap gap-y-[2vh]">
                                <Header3>{workExperience.title}{workExperience.company}</Header3>
                                <p className="
                                    font-print-clearly
                                    text-[4.5vw] lg:text-[2vw]
                                ">
                                    {workExperience.subheader}
                                </p>
                                {workExperience.description()}
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Education</Header2>

                {
                    getEducations().map((education, i) => {
                        return (
                            <div key={i} className="flex flex-col flex-wrap gap-y-[2vh]">
                                <Header3>{education.degreeProgram}</Header3>
                                <p className="
                                    font-print-clearly
                                    text-[4.5vw] lg:text-[2vw]
                                ">
                                    {education.subheader}
                                </p>
                                {education.description()}
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex flex-col flex-wrap gap-y-[5vh]">
                <Header2>Skills</Header2>

                {
                    getSkills().map((skill, i) => {
                        return (
                            <div key={i} className="flex flex-col flex-wrap gap-y-[2vh]">
                                <Header3>{skill.category}</Header3>
                                <p className={
                                    `font-print-clearly
                                    text-[4.5vw] lg:text-[2vw]
                                    ${skill.subheader ? 'block' : 'hidden'}`
                                }>
                                    {skill.subheader}
                                </p>
                                {skill.content()}
                            </div>
                        )
                    })
                }
            </div>

        </PageContainer>
    );
}