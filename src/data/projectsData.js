import ReactPlayer from "react-player/vimeo"

import ItchIcon from "../images/itch.png"
import LinkIcon from "../images/link.png"
import GithubIcon from "../images/github.png"

import Animeet from "../images/animeet.png"
import STACCGameplay from "../videos/stacc_gameplay.mov"
import DeepDiveGameplay from "../videos/deepdive_gameplay.mov"
import TheVoice1 from "../images/thevoice_1.png"
import TheVoice2 from "../images/thevoice_2.png"
import Sumie from "../images/sumie.png"
import ILLKReport from "../data/If Looks Could Kill Report.pdf"
import ASC from "../images/atmospheric-scattering.png"

import { LinkedIcon } from "../components/linkedIcon"
import { Link } from "react-router-dom"


let projects = [
    {
        name: "OpenGL Atmospheric Scattering",
        route: "atmospheric-scattering",
        logo: "/atmospheric-scattering.png",
        time: "May 2022",
        contents: [
            (key) => {
                return (
                    <div className="flex flex-wrap gap-[1rem]" key={key}>
                        <img alt="ASC" className="w-full" src={ASC} />
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://github.com/mharitsnf/AtmosphericScattering" icon={GithubIcon} alt="Github logo" >Github</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        Atmospheric Scattering is an OpenGL application that is currently being developed for the Computer Graphics and Interaction course. In this project, we aim to
                        develop an interactive simulation of the atmospheric scattering - how the sunlight is scattered upon entering the atmosphere that in turn
                        creates the blue sky and the red sunset. As such, the project is an implementation of the Rayleigh and Mie scattering phenomenon. The application is developed
                        in C++ using OpenGL. The project is being developed by a team of three, where I contributed in the project setup, camera movement,
                        and calculating the atmosphere density on the post-processing shader.
                    </p>
                )
            },
        ]
    },
    {
        name: "If Looks Could Kill",
        route: "if-looks-could-kill",
        logo: "/iflookscouldkill.png",
        time: "December 2021",
        contents: [
            (key) => {
                return (
                    <ReactPlayer key={key} className="w-full" url="https://vimeo.com/665938291" />
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://github.com/frilel/Gaze-Tracker-Game" icon={GithubIcon} alt="Github logo" >Github</LinkedIcon>
                        <LinkedIcon href={ILLKReport} icon={LinkIcon} alt="Link logo" >See report</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        If Looks Could Kill is a first-person shooter game developed for Multimodal Interaction and Interfaces course that utilizes eye tracking to move the in-game crosshair.
                        The game comes in two phases. In phase one, the player will be given a description of a man they have to follow. In phase two,
                        the player have to determine the evil mayor to defeat.
                    </p>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        The game is part of a research-through-design project that <span className="font-print-bold">aims to understand the impact of gaze tracker in video games</span>, especially
                        for first-person shooter (FPS) games. We first researched related studies regarding gaze tracker implementation in video games. From the research, we managed to determine
                        how should we implement the gaze tracking in our game, which was to control the camera and crosshair with gaze. The game was developed in Unity,
                        where I contributed the most on the shader and post-processing development. Beside Unity, I contributed in the research conducted prior to the development phase.
                        After the game was completed, a user study using GEQ was conducted to measure the impact of gaze tracing in FPS games.
                    </p>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        From this research we found that our participants had difficulties with aiming and turning the camera
                        in a smooth and fast manner. We also found that gaze tracking can provide high immersion, as the participants did not consider said
                        difficulties to be a hindrance to be fully occupied in the game.
                    </p>
                )
            },
        ]
    },
    {
        name: "STACC",
        route: "stacc",
        logo: "https://img.itch.zone/aW1nLzYyMTM2ODIucG5n/original/Fqtazd.png",
        time: "July 2021",
        contents: [
            (key) => {
                return (
                    <video key={key} loop autoPlay muted className="h-[30vh]">
                        <source src={STACCGameplay} type="video/mp4" />
                    </video>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://arsith.itch.io/stacc" icon={ItchIcon} alt="Itch.io logo" >Play on Itch.io</LinkedIcon>
                        <LinkedIcon href="https://github.com/mharitsnf/STACC" icon={GithubIcon} alt="Github logo" >Github</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col gap-y-[1.5vh]">
                        <p className="font-print-bold text-[2rem] lg:text-[2rem]">TLDR</p>
                        <p className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            STACC is a 2D puzzle game developed in under 48 hours for GMTK Game Jam 2021 using Godot Engine 3.
                            The player has to navigate through the mazes by moving the character around. Whenever the character moves,
                            their previous movement will be recorded and stored into a stack. After three moves, the stack will be full and the character
                            will not be able to move anymore. To regain the ability to move, the player must empty the stack, but in doing so, forces
                            the recorded movements will be replayed consecutively and unstoppably. The game reached top 16% in overall rank.
                        </p>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col gap-y-[2vh]">
                        <p className="font-print-bold text-[1.5rem] lg:text-[1.5rem]">The design process</p>
                        <p className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            In this game jam, the participants must adhere to the theme of the event, which was <span className="font-print-bold">"Joined Together"</span> and the theme could be freely interpreted by the participants.
                        </p>
                        <p className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            Driven by that constraint, our first objective was to answer the questions <span className="font-print-bold">"how should we interpret the theme?"</span> and <span className="font-print-bold">"how should we design the game around our interpretation?"</span>
                        </p>
                        <p className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            We brainstormed by expanding on both the idea and workings of tangible objects and metaphorical concepts. For example, some of the initial ideas were based on
                            chains as its nature is to "chain" or "link" certain things; what should we link? Should we link the character's movement? Or should we link other
                            things that the character possesses?
                        </p>
                        <p className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            As the design question expands, we needed another constraint. An obvious constraint was time, as we only had 48 hours to deliver a complete game. We opted
                            to create a mechanically simple game, but at the same time allows us display our creativity in our design. As the result, we decided to develop a puzzle game
                            with a flexible mechanic that we can exploit to increase the puzzle variation.
                        </p>
                        <p className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            We arrived at <span className="font-print-bold">the concept of data structures</span>. We explored how can one design a game around a certain data structure while
                            keep adhering to the theme.
                        </p>
                    </div>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        In this project, I was responsible as the lead programmer of the game and the team leader of the project. I also assisted in creating the
                        game's visual assets.
                        The game was well-received by other participants and managed to receive significant increase in ranks compared to the previous games such as <Link className="underline" to="/projects/deep-dive">Deep Dive</Link> and <Link className="underline" to="/projects/the-voice">The Voice</Link>.
                    </p>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col text-[1.5rem] lg:text-[1.5rem]">
                        <p className="font-print-bold">Ranks:</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Presentation: </span> 982 / 5755</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Originality: </span> 829 / 5755</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Fun: </span> 1370 / 5755</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Overall: </span> 969 / 5755 (top 16%)</p>
                    </div>
                )
            }
        ]
    },
    {
        name: "Deep Dive",
        route: "deep-dive",
        logo: "https://img.itch.zone/aW1nLzU3ODAwMTIucG5n/original/bxG28N.png",
        time: "May 2021",
        contents: [
            (key) => {
                return (
                    <video key={key} loop autoplay muted className="h-[35vh]">
                        <source src={DeepDiveGameplay} type="video/mp4" />
                    </video>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://arsith.itch.io/deep-dive" icon={ItchIcon} alt="Itch.io logo" >Play on Itch.io</LinkedIcon>
                        <LinkedIcon href="https://github.com/mharitsnf/DeepDiveGame" icon={GithubIcon} alt="Github logo" >Github</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col gap-y-[1.5vh]">
                        <p className="font-print-bold text-[2rem] lg:text-[2rem]">TLDR</p>
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            Deep Dive is a 2D platformer game developed in 48 hours for Ludum Dare 48 using Godot Engine 3.
                            The player must escape underwater dungeons along with the treasure. Whenever the character carries
                            the treasure, the character sinks, but whenever they are not, they will float.
                        </p>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col gap-y-[2vh]">
                        <p className="font-print-bold text-[1.5rem] lg:text-[1.5rem]">The design process</p>
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            The jam comes with a theme <span className="font-print-bold">"deeper and deeper"</span> and can be freely interpreted by the participants.
                            The game jam did not require the players to strictly follow the theme, but it is highly encouraged.
                            As I found having a theme to be beneficial for the creative process, I decided to follow the theme.
                            I interpreted the theme as "going deep into the underwater dungeon to get the treasure."
                        </p>
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            My vision in this project was to create a game based on a <span className="font-print-bold">simple but highly expandable mechanic</span>. The time limit also contrained me to work in 2D,
                            as working in 3D is considerably more challenging than working in 2D and requires more time to produce a high quality game. With those constraints set
                            in place, the design process was started.
                        </p>
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            There are two most common game views in 2D: top-down view and side-scrolling view. Both of them have their own advantages and disadvantages; top-down games
                            allows the player to freely move around a map, similar to third-person games in 3D, but losing the ability to interact with gravity,
                            while side-scrolling view adds some verticality while losing the more open feeling to the game. I believed gravity to be a fun mechanic to tamper with, so
                            I went with the side-scrolling option.
                        </p>
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            An obvious choice for a 2D side-scrolling game with gravity is the puzzle/action platforming genre. It is highly popular, easy to understand, and loved by
                            a lot of people. In order to add some originality to the game, I need a unique mechanic twist added to it. Thanks to the theme that I had interpreted earlier,
                            I found a matching mechanic: <span className="font-print-bold">the gravity works normally when the player is carrying the treasure, but the gravity will become upside-down without the treasure,
                                simulating the floating and sinking feeling.</span>
                        </p>
                    </div>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        As I worked alone in this project, I did all the programming by myself and used mostly external assets for the visuals, with slight modifications to it.
                        The game was praised for its unique design by other participants
                        and managed to score a high rank in the innovation criteria (top 5%).
                    </p>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col text-[1.5rem] lg:text-[1.5rem]">
                        <p className="font-print-bold">Ranks:</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Mood: </span> 1443 / 3866</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Theme: </span> 1488 / 3866</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Innovation: </span> 205 / 3866</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Fun: </span> 692 / 3866</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Overall: </span> 977 / 3866 (top 25%)</p>
                    </div>
                )
            }
        ]
    },
    {
        name: "Godot Sumi-E Shader",
        route: "sumi-e",
        logo: '/sumie.png',
        time: 'September 2020',
        contents: [
            (key) => {
                return (
                    <div className="flex flex-wrap gap-[1rem]" key={key}>
                        <img alt="sumie" className="w-[50vw]" src={Sumie} />
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://arsith.itch.io/sumi-e-demo-shader" icon={ItchIcon} alt="Itch.io logo" >Play on Itch.io</LinkedIcon>
                        <LinkedIcon href="https://github.com/mharitsnf/Godot-Sumi-E-Shader" icon={GithubIcon} alt="Github logo" >Github</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        A shader that aims to replicate traditional Japanese painting Sumi-E developed in Godot Engine 3.
                        The shader was based on <a className="underline" target='_blank' rel='noreferrer' href="https://link.springer.com/chapter/10.1007/978-3-642-01973-9_87">this</a> research.
                    </p>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col gap-y-[2vh]">
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            This is a hobby project that I did in order to learn more about computer graphics and post-processing effects. By doing this project,
                            I learned some interesting concepts in image processing and computer graphics, such as convolution and sphere mapping.
                        </p>
                    </div>
                )
            },
        ]
    },
    {
        name: "The Voice",
        route: "the-voice",
        logo: "https://img.itch.zone/aW1nLzM4NTA3NTQucG5n/original/Vl3Vyi.png",
        time: 'July 2020',
        contents: [
            (key) => {
                return (
                    <div className="flex flex-wrap gap-[1rem]" key={key}>
                        <img alt="thevoice_1" className="w-[20vw]" src={TheVoice1} />
                        <img alt="thevoice_2" className="w-[20vw]" src={TheVoice2} />
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://arsith.itch.io/the-voice" icon={ItchIcon} alt="Itch.io logo" >Itch.io</LinkedIcon>
                        <LinkedIcon href="https://github.com/mharitsnf/TheVoiceGame" icon={GithubIcon} alt="Github logo" >Github</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col gap-y-[1.5vh]">
                        <p className="font-print-bold text-[2rem] lg:text-[2rem]">TLDR</p>
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            The Voice is a turn based game developed in under 48 hours for GMTK Game Jam 2020 using Godot Engine 3.
                            The player must win a tournament by collaborating with the in-game character Bob. The player can command
                            Bob to perform actions such as attack or heal but Bob may choose not to listen. In order to ensure that Bob
                            will listen, the player must build a good relationship with him.
                        </p>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col gap-y-[2vh]">
                        <p className="font-print-bold text-[1.5rem] lg:text-[1.5rem]">The design process</p>
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            The theme of the jam <span className="font-print-bold">"Out of Control"</span> and all of the participants must adhere to the theme.
                            It was up to the participants on how to interpret the theme, and so we decided to interpret the theme
                            as "losing control of your character".
                        </p>
                        <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                            Our interpretation opens up quite a lot of possibilities for the game. We had some ideas about making it a top-down or side-scrolling
                            2D game, but ultimately we went with a turn-based game as we want to avoid similar concepts that might also be used by other participants.
                        </p>
                    </div>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        The project was developed in a group of 4. In this project, I was focusing on programming the game while assisting on the visual assets development.
                    </p>
                );
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col text-[1.5rem] lg:text-[1.5rem]">
                        <p className="font-print-bold">Ranks:</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Presentation: </span> 3066 / 5418</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Originality: </span> 3565 / 5418</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Fun: </span> 3767 / 5418</p>
                        <p className="font-print-clearly"><span className="font-print-bold">Overall: </span> 3129 / 5418 (top 57%)</p>
                    </div>
                )
            }
        ]
    },
]

let webAndApps = [
    {
        name: "Animeet",
        route: "animeet",
        logo: "/animeet-logo.png",
        time: "February 2022",
        contents: [
            (key) => {
                return (
                    <div className="flex flex-wrap gap-[1rem]" key={key}>
                        <img alt="animeetlogo" className="h-full" src={Animeet} />
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://arsith.itch.io/sumi-e-demo-shader" icon={LinkIcon} alt="link icon" >Visit webpage</LinkedIcon>
                        <LinkedIcon href="https://github.com/mharitsnf/Godot-Sumi-E-Shader" icon={GithubIcon} alt="Github logo" >Github</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        Animeet is an <span className="font-print-bold">interactive anime visualization tool</span> that allows the users to discover and learn about anime however they like.
                        The tool is equipped with filters, zoom function, and brushes to aid the discovery process. Users can learn about the details
                        of any present anime by clicking on one of the dots. The data was acquired from <a className="underline" href="https://www.kaggle.com/datasets/vishalmane10/anime-dataset-2022" target="_blank" rel="noreferrer">Kaggle</a>.
                    </p>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        The tool was built with ReactJS and D3.JS. My role in this project was to implement the interactive tools such as the filters
                        and the brushes, while also styling and developing the overall layout of the application. Animeet was chosen to be exhibited at MID Spring Exhibition
                        2022 at KTH Royal Institue of Technology, Stockholm, Sweden.
                    </p>
                )
            },
        ]
    },
    {
        name: "Yakult Propaganda Mobile",
        route: "yakult",
        logo: "https://storage.googleapis.com/terra_web/assets/images/demo--yakult2.png",
        time: "January 2021",
        contents: [
            (key) => {
                return (
                    <div className="flex flex-wrap gap-[1rem]" key={key}>
                        <img alt="animeetlogo" className="w-full lg:w-[20vw]" src="https://storage.googleapis.com/terra_web/assets/images/demo--yakult1.png" />
                        <img alt="animeetlogo" className="w-full lg:w-[20vw]" src="https://storage.googleapis.com/terra_web/assets/images/demo--yakult2.png" />
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://terralogiq.com/portfolio/yakult/" icon={LinkIcon} alt="link icon" >Visit company portfolio</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col text-[1.5rem] lg:text-[1.5rem]">
                        <p className="font-print-clearly ">
                            Yakult has 87 branch offices in Indonesia. For distributing the Yakult drink in Indonesia, Yakult utilizes three methods: direct sales, Yakult Lady, and through an office branch.
                            With three different distribution methods, Yakult required a system that allows them to analyze and determine potential sales location with
                            high precision and accuracy that can be used between the three sales methods with ease.
                        </p>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col text-[1.5rem] lg:text-[1.5rem]">
                        <p className="font-print-clearly ">
                            In this project, I took part as the project's back-end engineer. My responsibilities included developing RESTful APIs to provide an interface between
                            the user interface and the data and designing and implementing the relational database system. The stack used were KoaJS and GraphQL for the back-end.
                        </p>
                    </div>
                )
            },
        ]
    },
    {
        name: "MyAgent System JNE",
        route: "jne",
        logo: "https://storage.googleapis.com/terra_web/assets/images/demo--jne.svg",
        time: "January 2021",
        contents: [
            (key) => {
                return (
                    <div className="flex flex-wrap gap-[1rem]" key={key}>
                        <img alt="jne1" className="w-full lg:w-[20vw]" src="https://storage.googleapis.com/terra_web/assets/images/demo--jne.svg" />
                        <img alt="jne2" className="w-full lg:w-[20vw]" src="https://storage.googleapis.com/terra_web/assets/images/demo--jne.svg" />
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://terralogiq.com/portfolio/jne/" icon={LinkIcon} alt="link icon" >Visit company portfolio</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col text-[1.5rem] lg:text-[1.5rem]">
                        <p className="font-print-clearly ">
                            JNE is one of the leading logistic companies in Indonesia with more than 400 branches and 4500 agents throughout the archipelago.
                            An agent handles a store that allows end-users to send and receive packages. With such large number of agents, a system to synchronize
                            and manage the store data such as contact information and promotional content is required to ease the company's workflow.
                        </p>
                    </div>
                )
            }, (key) => {
                return (
                    <div key={key} className="flex flex-col text-[1.5rem] lg:text-[1.5rem]">
                        <p className="font-print-clearly ">
                            I took part as the project's back-end engineer. My responsibilities included developing RESTful APIs to provide an interface between
                            the user interface and the data and designing and implementing the relational database system. I also took part on the development of
                            the mobile application. The stack used in this project were PHP/Laravel on the back-end, React Native for the mobile application.
                        </p>
                    </div>
                )
            },
        ]
    },
]

let publications = [
    {
        name: "Feature Extraction from Smartphone Images by Using Elliptical Fourier Descriptor, Centroid and Area for Recognizing Indonesian Sign Language SIBI (Sistem Isyarat Bahasa Indonesia)",
        route: "ICOIAS2019",
        time: "February 2019",
        contents: [
            (key) => {
                return (
                    <div key={key} className="flex flex-wrap gap-x-[10vw]">
                        <LinkedIcon href="https://ieeexplore.ieee.org/document/8782484" icon={LinkIcon} alt="link icon" >Visit publication</LinkedIcon>
                    </div>
                )
            }, (key) => {
                return (
                    <p key={key} className="font-print-clearly text-[1.5rem] lg:text-[1.5rem]">
                        The research aimed to test three features of hand gesture images and implement a hand gesture feature extraction algorithm from a single RGB camera for recognizing Indonesian Sign Language SIBI (Sistem Isyarat Bahasa Indonesia).
                        The features were then implemented into SIBI recognition software. The chosen features were Elliptical Fourier Descriptor, area, and centroid, as the combination of those
                        of the three exhibited good results, with accuracy up to 99%. The research was presented at ICOIAS 2019 at Singapore and was published afterwards.
                    </p>
                )
            },
        ]
    },
]

export const getProjects = () => {
    return projects
}

export const getProject = (route) => {
    return projects.find(
        project => project.route === route
    )
}

export const getWebAndApps = () => {
    return webAndApps
}

export const getWebAndApp = (route) => {
    return webAndApps.find(
        web => web.route === route
    )
}

export const getPublications = () => {
    return publications
}

export const getPublication = (route) => {
    return publications.find(
        publication => publication.route === route
    )
}