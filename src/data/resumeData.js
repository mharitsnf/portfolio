
const terralogiqLink = () => {
    return (<a className="underline underline-offset-1" href="https://terralogiq.com/" target="_blank" rel="noreferrer" >Terralogiq</a>);
}

let workExperiences = [
    {
        title: "Professional Development",
        company: "",
        subheader: "May 2020 - June 2021 • Jakarta, Indonesia",
        description: () => {
            return (
                <p className="font-print-clearly text-[3.5vw] lg:text-[1.5vw]">
                    Studied game development and computer graphics using Godot Engine, and front-end web development using ReactJS. Participated in 3 large-scale game jams as teams of 3-4, taking the role of team leader and programmer, while assisting on making the game’s visuals as well. Significant growth between the three developed games rank were seen, from top 57% to top 16% amongst thousands of participants.
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
                        <li>Developed RESTful API using NodeJS, PHP, and Python. Data were stored and managed using MySQL and Redis.</li>
                        <li>Developed responsive web and mobile applications using ReactJS, React Native, and Webpack.</li>
                        <li>Worked in a team of 3-5 developers with Scrum methodology in mind.</li>
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
                        <li>Developed CMS for a pilot project that aims to tackle first-mile logistic problems such as courier route selection using Django and MySQL.</li>
                        <li>Designed and developed the project’s database system using Entity-Relationship Diagram.</li>
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
                        <li>Developed RESTful API for the company’s sub-application “Ruang Desa” that aims to help the user consult about Indonesian village law and regulations. Developed using PHP Laravel/Lumen.</li>
                        <li>Implemented unit tests and integration tests for the APIs.</li>
                    </div>
                </div>
            )
        }
    }
]

let educations = [
    {
        degreeProgram: "M.Sc Interactive Media Technology",
        subheader: "KTH Royal Institute of Technology • August 2021 - Now",
        description: () => {
            return (
                <div className="flex flex-col gap-[2vh] text-[3.5vw] lg:text-[1.5vw]">
                    <p className="font-print-bold text-[4vw] lg:text-[2vw]">Key responsibilities:</p>
                    <div className="font-print-clearly">
                        <li>Visual track with focus on Computer Graphics, Game Design, and Interaction Design.</li>
                    </div>
                </div>
            )
        }
    },
    {
        degreeProgram: "B.Sc Computer Science",
        subheader: "University of Indonesia • September 2014 - January 2019",
        description: () => {
            return (
                <div className="flex flex-col gap-[2vh] text-[3.5vw] lg:text-[1.5vw]">
                    <p className="font-print-bold text-[4vw] lg:text-[2vw]">Key responsibilities:</p>
                    <div className="font-print-clearly">
                        <li>Majoring in media applications with relevant courses including Computer Graphics, Game Development, Digital Image Processing, and Interactive Web Programming.</li>
                        <li>Thesis “Feature Extraction from Smartphone Images by Using Elliptical Fourier Descriptor, Centroid and Area for Recognizing Indonesian Sign Language SIBI (Sistem Isyarat Bahasa Indonesia)” was presented on ICOIAS 2019 in Singapore and published afterwards.</li>
                    </div>
                </div>
            )
        }
    }
]

let skills = [
    {
        category: "Computing",
        subheader: "",
        content: () => {
            return (
                <div className="text-[3.5vw] lg:text-[1.5vw] flex flex-col gap-y-[2vh]">
                    <div>
                        <p className="font-print-bold text-[4vw] lg:text-[2vw]">Advanced</p>
                        <div className="flex flex-wrap gap-x-[2vw] font-print-clearly">
                            <p>JavaScript (NodeJS / React)</p>
                            <p>Godot Engine / GDScript</p>
                            <p>HTML</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-print-bold text-[4vw] lg:text-[2vw]">Intermediate</p>
                        <div className="flex flex-wrap gap-x-[2vw] font-print-clearly">
                            <p>Unity / C#</p>
                            <p>C++</p>
                            <p>HLSL</p>
                            <p>PHP</p>
                            <p>Python</p>
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        category: "Design",
        subheader: "",
        content: () => {
            return (
                <div className="font-print-clearly text-[4vw] lg:text-[1.5vw] flex flex-wrap gap-x-[2vw]">
                    <p>Figma</p>
                    <p>Blender</p>
                    <p>Aseprite (pixel art)</p>
                </div>
            )
        }
    },
    {
        category: "Languages",
        subheader: "",
        content: () => {
            return (
                <div className="font-print-clearly text-[4vw] lg:text-[1.5vw] flex flex-wrap gap-x-[3rvw]">
                    <p>Indonesian</p>
                    <p>English (IELTS 7.5)</p>
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