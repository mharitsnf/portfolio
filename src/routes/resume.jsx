
import { Menu } from "../components/menu";
import { Header, Header2, Header3 } from "../components/header";
import { PageTitle } from "../components/pageTitle";

export default function Resume() {
    return (
        <div className="bg-dark-blue h-screen relative">
            <Header />
            <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
                <div className="flex flex-col gap-y-[1vh] md:w-[50vw]">
                    <div className="h-[10vh]" />
                    <PageTitle>Resume</PageTitle>

                    <div className="h-[3vh]" />

                    <div className="flex flex-col gap-[8vh]">
                        <div>
                            <Header2>Work Experience</Header2>
                            <div className="flex flex-col gap-[4vh]">
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>Career Break</Header3>
                                    <p className="font-print-clearly text-[4vw] md:text-[1.5vw]">May 2020 - August 2021</p>
                                    <p className="font-print-clearly md:text-[1.5vw]">
                                        Left the previous job due to being admitted to KTH on April 2020 but decided not to depart due to the pandemic. During this period, I spent my time learning about game development and computer graphics and participated on various game jams. Skills learned including Godot Engine, Blender, and Game Design.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>Software Engineer, <a className="underline underline-offset-1" href="https://terralogiq.com/">Terralogiq</a></Header3>
                                    <p className="font-print-clearly text-[4vw] md:text-[1.5vw]">April 2019 - May 2020 • Jakarta, Indonesia • Full-Time</p>
                                    <div className="flex flex-col gap-[2vh] md:text-[1.5vw]">
                                        <p className="font-print-bold">Key responsibilities:</p>
                                        <div className="font-print-clearly">
                                            <li>Developed new and maintained existing RESTful APIs for ongoing and finished client projects while utilizing Google Map's APIs. Stack used includes PHP, Python, NodeJS, MySQL, and Redis.</li>
                                            <li>Developed responsive web and mobile applications using ReactJS and React Native.</li>
                                        </div>
                                        <p className="font-print-bold">Developed Products:</p>
                                        <div className="font-print-clearly">
                                            <li className="underline underline-offset-1"><a target="_blank" rel="noreferrer" href="https://terralogiq.com/portfolio/yakult/">Yakult Propaganda Mobile for analyzing potential sales locations.</a></li>
                                            <li className="underline underline-offset-1"><a target="_blank" rel="noreferrer" href="https://terralogiq.com/portfolio/jne/">JNE Agent Management System.</a></li>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>Software Engineer, Pandusiwi</Header3>
                                    <p className="font-print-clearly text-[4vw] md:text-[1.5vw]">January 2018 - February 2018 • Bandung, Indonesia • Internship</p>
                                    <div className="flex flex-col gap-[2vh] md:text-[1.5vw]">
                                        <p className="font-print-bold">Key responsibilities:</p>
                                        <div className="font-print-clearly">
                                            <li>Developed a CMS for a pilot project which aims to solve first-mile logistic problems such as automatic courier route selection. Stack used includes Django and MySQL.</li>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>Back-end Engineer, Ruangguru</Header3>
                                    <p className="font-print-clearly text-[4vw] md:text-[1.5vw]">June 2017 - September 2017 • Jakarta, Indonesia • Internship</p>
                                    <div className="flex flex-col gap-[2vh] md:text-[1.5vw]">
                                        <p className="font-print-bold">Key responsibilities:</p>
                                        <div className="font-print-clearly">
                                            <li>Developed and maintained RESTful APIs including their unit tests using Laravel/Lumen.</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Header2>Education</Header2>
                            <div className="flex flex-col gap-[2vh]">
                                <div className="flex flex-col">
                                    <Header3>M.Sc Interactive Media Technology</Header3>
                                    <p className="font-print-bold md:text-[1.5vw]">KTH Royal Institute of Technology</p>
                                    <p className="font-print-clearly md:text-[1.5vw]">August 2021 - Now</p>
                                </div>
                                <div className="flex flex-col">
                                    <Header3>B.Sc Computer Science</Header3>
                                    <p className="font-print-bold md:text-[1.5vw]">Universitas Indonesia</p>
                                    <p className="font-print-clearly md:text-[1.5vw]">September 2014 - January 2019</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Header2>Skills</Header2>
                            <div className="flex flex-col gap-[1vh]">
                                <Header3>Programming Languages and Tools</Header3>
                                <p className="font-print-bold md:text-[1.5vw]">Sorted by comfortability</p>
                                <div className="flex flex-wrap font-print-clearly gap-x-[4vw] gap-y-[1.5vh] justify-start md:text-[1.5vw]">
                                    <p>JavaScript</p>
                                    <p>Godot / GDScript</p>
                                    <p>HLSL</p>
                                    <p>C++</p>
                                    <p>Unity / C#</p>
                                    <p>PHP</p>
                                    <p>Python</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="h-[15vh]" />

                </div>
            </div>
            <Menu />
        </div>
    );
}