
import { Menu } from "../components/menu";

export default function Resume() {
    return (
        <div className="bg-dark-blue h-screen relative">
            <div className="absolute py-[3.5vh] px-[8vw] w-full bg-dark-blue text-white" >
                <p className="font-print-clearly text-[5vw]">Harits Nur Fauzan</p>
            </div>
            <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
                <div className="flex flex-col gap-y-[1vh]">
                    <div className="h-[10vh]" />
                    <h1 className="font-print-bold text-[18vw]">Resume</h1>
                    
                    <div className="h-[3vh]" />

                    <div className="flex flex-col gap-[8vh]">
                        <div>
                            <h2 className="font-print-bold text-[12vw]">Work Experience</h2>
                            <div className="flex flex-col gap-[4vh]">
                                <div className="flex flex-col gap-[2vh]">
                                    <h3 className="font-print-bold text-[6vw]">Career break</h3>
                                    <p className="font-print-clearly text-[4vw]">May 2020 - August 2021</p>
                                    <p className="font-print-clearly">
                                        Left the previous job due to being admitted to KTH on April 2020 but decided not to depart due to the pandemic. During this period, I spent my time learning about game development and computer graphics and participated on various game jams. Skills learned including Godot Engine, Blender, and Game Design.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-[2vh]">
                                    <h3 className="font-print-bold text-[6vw]">Software Engineer, <a href="https://terralogiq.com/">Terralogiq</a></h3>
                                    <p className="font-print-clearly text-[4vw]">April 2019 - May 2020 • Jakarta, Indonesia • Full-Time</p>
                                    <p className="font-print-bold">Roles:</p>
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
                                <div className="flex flex-col gap-[2vh]">
                                    <h3 className="font-print-bold text-[6vw]">Software Engineer, Pandusiwi</h3>
                                    <p className="font-print-clearly text-[4vw]">January 2018 - February 2018 • Bandung, Indonesia • Internship</p>
                                    <p className="font-print-bold">Roles:</p>
                                    <div className="font-print-clearly">
                                        <li>Developed a CMS for a pilot project which aims to solve first-mile logistic problems such as automatic courier route selection. Stack used includes Django and MySQL.</li>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[2vh]">
                                    <h3 className="font-print-bold text-[6vw]">Back-end Engineer, Ruangguru</h3>
                                    <p className="font-print-clearly text-[4vw]">June 2017 - September 2017 • Jakarta, Indonesia • Internship</p>
                                    <p className="font-print-bold">Roles:</p>
                                    <div className="font-print-clearly">
                                        <li>Developed and maintained RESTful APIs including their unit tests using Laravel/Lumen.</li>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-print-bold text-[12vw]">Education</h2>
                            <div className="flex flex-col gap-[2vh]">
                                <div className="flex flex-col">
                                    <h3 className="font-print-bold text-[6vw]">M.Sc Interactive Media Technology</h3>
                                    <p className="font-print-bold">KTH Royal Institute of Technology</p>
                                    <p className="font-print-clearly">August 2021 - Now</p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-print-bold text-[6vw]">B.Sc Computer Science</h3>
                                    <p className="font-print-bold">Universitas Indonesia</p>
                                    <p className="font-print-clearly">September 2014 - January 2019</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-print-bold text-[12vw]">Skills</h2>
                            <div className="flex flex-col gap-[1vh]">
                                <h3 className="font-print-bold text-[6vw]">Programming Languages and Tools</h3>
                                <p className="font-print-bold">Sorted by comfortability</p>
                                <div className="flex flex-wrap font-print-clearly gap-[4vw] justify-start">
                                    <p>JavaScript</p>
                                    <p>Godot / GDScript</p>
                                    <p>Unity / C#</p>
                                    <p>HLSL</p>
                                    <p>C++</p>
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