
import { Menu } from "../components/menu";
import { Header, Header2, Header3 } from "../components/header";
import { PageTitle } from "../components/pageTitle";
import { LinkedIcon } from "../components/linkedIcon";
import Itch from "../images/itch.png"
import LinkLogo from "../images/link.png"

export default function Projects() {
    return (
        <div className="bg-dark-blue h-screen relative">
            <Header />
            <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
                <div className="flex flex-col gap-y-[1vh] md:w-[50vw]">
                    <div className="h-[10vh]" />
                    <PageTitle>Projects</PageTitle>
                    <div className="h-[3vh]" />

                    <div className="flex flex-col gap-[8vh]">
                        <div>
                            <Header2>Games</Header2>
                            <div className="flex flex-col gap-[4vh] md:gap-[6vh]">
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>STACC</Header3>
                                    <p className="font-print-clearly md:text-[1.5vw]">A puzzle game developed for GMTK Game Jam 2021 in Godot Engine. Players have to navigate through the maze by moving around the level. Each time the character moves, his movement will be recorded and should be used in one shot after three moves were recorded.</p>

                                    <div className="flex flex-col font-print-clearly gap-[1vh]">
                                        <p className="font-print-bold md:text-[1.5vw]">Ranks (out of number of entries):</p>
                                        <div className="grid text-[4vw] md:text-[1.5vw]">
                                            <p><span className="font-print-bold">Originality: </span> 829 / 5755</p>
                                            <p className="col-start-2"><span className="font-print-bold">Fun: </span> 1370 / 5755</p>
                                            <p className="row-start-2 "><span className="font-print-bold">Presentation: </span> 982 / 5755</p>
                                            <p className="row-start-2 col-start-2"><span className="font-print-bold">Overall: </span> 1370 / 5755</p>
                                        </div>
                                    </div>
                                    <LinkedIcon icon={Itch} alt="Itch.io logo" href="https://arsith.itch.io/stacc">Play on Itch.io</LinkedIcon>
                                </div>
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>Deep Dive</Header3>
                                    <p className="font-print-clearly md:text-[1.5vw]">A 2D platformer game developed for Ludum Dare 48 in Godot Engine. Players have to deliver a treasure to an exit by carrying it over the character's head. Whenever the character carries the treasure, the character sinks; however whenever they are not, the character floats.</p>

                                    <div className="flex flex-col font-print-clearly gap-[1vh]">
                                        <p className="font-print-bold md:text-[1.5vw]">Ranks (out of number of entries):</p>
                                        <div className="grid text-[4vw] md:text-[1.5vw]">
                                            <p><span className="font-print-bold">Fun: </span> 692 / 3866</p>
                                            <p className="col-start-2"><span className="font-print-bold">Innovation: </span> 205 / 3866</p>
                                            <p className="row-start-2 "><span className="font-print-bold">Theme: </span> 1488 / 3866</p>
                                            <p className="row-start-2 col-start-2"><span className="font-print-bold">Mood: </span> 1443 / 3866</p>
                                            <p className="row-start-3 "><span className="font-print-bold">Overall: </span> 977 / 3866</p>
                                        </div>
                                    </div>
                                    <LinkedIcon icon={Itch} alt="Itch.io logo" href="https://arsith.itch.io/deep-dive">Play on Itch.io</LinkedIcon>
                                </div>
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>The Voice</Header3>
                                    <p className="font-print-clearly md:text-[1.5vw]">A turn-based game developed for GMTK Game Jam 2020. The player must win a tourament by performing series of actions such as heal and attack while maintaining their relationship with the character's inner "voice". If they do not have a good relationship, the character might perform their own actions instead of listening to the player and vice versa.</p>

                                    <div className="flex flex-col font-print-clearly gap-[1vh]">
                                        <p className="font-print-bold md:text-[1.5vw]">Ranks (out of number of entries):</p>
                                        <div className="grid text-[4vw] md:text-[1.5vw]">
                                            <p><span className="font-print-bold">Originality: </span> 3565 / 5418</p>
                                            <p className="col-start-2"><span className="font-print-bold">Fun: </span> 3767 / 5418</p>
                                            <p className="row-start-2 "><span className="font-print-bold">Presentation: </span> 3066 / 5418</p>
                                            <p className="row-start-2 col-start-2"><span className="font-print-bold">Overall: </span> 3129 / 5418</p>
                                        </div>
                                    </div>
                                    <LinkedIcon icon={Itch} alt="Itch.io logo" href="https://arsith.itch.io/the-voice">Play on Itch.io</LinkedIcon>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Header2>Webs and Apps</Header2>
                            <div className="flex flex-col gap-[4vh]">
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>Animeet</Header3>
                                    <p className="font-print-clearly md:text-[1.5vw]">Animeet is an anime visualization tool that allows the users to explore and discover animes based on their similarities and other attributes such as rank and rating. The tool is interactive and equipped with filters and brushes.</p>
                                    <LinkedIcon icon={LinkLogo} alt="Itch.io logo" href="https://animeet-nine.vercel.app/">Open webpage</LinkedIcon>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Header2>Publications</Header2>
                            <div className="flex flex-col gap-[4vh]">
                                <div className="flex flex-col gap-[2vh]">
                                    <Header3>Feature Extraction from Smartphone Images by Using Elliptical Fourier Descriptor, Centroid and Area for Recognizing Indonesian Sign Language SIBI (Sistem Isyarat Bahasa Indonesia)</Header3>
                                    <p className="font-print-clearly md:text-[1.5vw]">Researched suitable image features for hand gesture recognition especially used for SIBI (Sistem Isyarat Bahasa Indonesia) inflectional word gestures, using a single RGB smartphone camera. The features extracted are Elliptical Fourier Descriptor, Centroid, and Area. The features will be used for training and testing a 2-layer Long Short-Term Memory (LSTM) model.</p>
                                    <LinkedIcon icon={LinkLogo} alt="Itch.io logo" href="https://ieeexplore.ieee.org/abstract/document/8782484?casa_token=FLwZEgHFbB8AAAAA:W9mv5s2AxZlcbYljq4o8cKIDMKvX1Lvxtly6RO9pQuiNgw7z4V0sRbET9DFPNrzxl_WbfV_o">Open page</LinkedIcon>
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