
const terralogiqLink = () => {
    return (<a className="underline underline-offset-1" href="https://terralogiq.com/" target="_blank" rel="noreferrer" >Terralogiq</a>);
}

let workExperiences = [
    {
        title: "Career Break",
        company: "",
        subheader: "May 2020 - June 2021 • Jakarta, Indonesia",
        description: () => {
            return (
                <p className="font-print-clearly text-[3.5vw] lg:text-[1.5vw]">
                    Left the previous job due to being admitted to KTH on April 2020 but decided not to depart due to the pandemic. During this period, I spent my time learning about game development and computer graphics and participated on various game jams. Skills learned including Godot Engine, Blender, and Game Design.
                </p>
            )
        }
    },
    {
        title: "Software Engineer, ",
        company: terralogiqLink(),
        subheader: "April 2019 - May 2020 • Jakarta, Indonesia • Full-Time",
        description: () => {
            return (
                <div className="flex flex-col gap-[2vh] text-[3.5vw] lg:text-[1.5vw]">
                    <p className="font-print-bold text-[4vw] lg:text-[2vw]">Key responsibilities:</p>
                    <div className="font-print-clearly">
                        <li>Developed new and maintained existing RESTful APIs for ongoing and finished client projects while utilizing Google Map's APIs. Stack used includes PHP, Python, NodeJS, MySQL, and Redis.</li>
                        <li>Developed responsive web and mobile applications using ReactJS and React Native.</li>
                    </div>
                    <p className="font-print-bold text-[4vw] lg:text-[2vw]">Developed Products:</p>
                    <div className="font-print-clearly">
                        <li className="underline underline-offset-1"><a target="_blank" rel="noreferrer" href="https://terralogiq.com/portfolio/yakult/">Yakult Propaganda Mobile for analyzing potential sales locations.</a></li>
                        <li className="underline underline-offset-1"><a target="_blank" rel="noreferrer" href="https://terralogiq.com/portfolio/jne/">JNE Agent Management System.</a></li>
                    </div>
                </div>
            )
        }
    },
    {
        title: "Software Engineer, ",
        company: "Pandusiwi",
        subheader: "January 2018 - February 2018 • Bandung, Indonesia • Internship",
        description: () => {
            return (
                <div className="flex flex-col gap-[2vh] text-[3.5vw] lg:text-[1.5vw]">
                    <p className="font-print-bold text-[4vw] lg:text-[2vw]">Key responsibilities:</p>
                    <div className="font-print-clearly">
                        <li>Developed a CMS for a pilot project which aims to solve first-mile logistic problems such as automatic courier route selection. Stack used includes Django and MySQL.</li>
                    </div>
                </div>
            )
        },
    },
    {
        title: "Back-End Engineer, ",
        company: "Ruangguru",
        subheader: "June 2017 - September 2017 • Jakarta, Indonesia • Internship",
        description: () => {
            return (
                <div className="flex flex-col gap-[2vh] text-[3.5vw] lg:text-[1.5vw]">
                    <p className="font-print-bold text-[4vw] lg:text-[2vw]">Key responsibilities:</p>
                    <div className="font-print-clearly">
                        <li>Developed and maintained RESTful APIs including their unit tests using Laravel/Lumen.</li>
                    </div>
                </div>
            )
        }
    }
]

let educations = [
    {
        degreeProgram: "M.Sc Interactive Media Technology",
        university: "KTH Royal Institute of Technology",
        time: "August 2021 - Now"
    },
    {
        degreeProgram: "B.Sc Computer Science",
        university: "University of Indonesia",
        time: "September 2014 - January 2019"
    }
]

let skills = [
    {
        category: "Programming Languages and Tools",
        subheader: "Sorted by comfortability",
        content: () => {
            return (
                <div className="flex flex-wrap font-print-clearly gap-x-[4vw] gap-y-[1.5vh] justify-start text-[4vw] lg:text-[1.5vw]">
                    <p>JavaScript</p>
                    <p>Godot / GDScript</p>
                    <p>HLSL</p>
                    <p>C++</p>
                    <p>Unity / C#</p>
                    <p>PHP</p>
                    <p>Python</p>
                </div>
            )
        }
    },
    {
        category: "Languages",
        subheader: "",
        content: () => {
            return (
                <div className="font-print-clearly text-[4vw] lg:text-[1.5vw]">
                    <p><span className="font-print-bold">Native/fluent: </span>Indonesian, English</p>
                    <p><span className="font-print-bold">Beginner: </span>Swedish</p>
                </div>
            )
        }
    }
]

export const getWorkExperiences = () => {
    return workExperiences
}

export const getEducations = () => {
    return educations
}

export const getSkills = () => {
    return skills
}