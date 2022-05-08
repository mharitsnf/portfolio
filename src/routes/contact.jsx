
import { Menu } from "../components/menu"
import Email from "../images/email.png"
import Linkedin from "../images/linkedin-logo.png"
import Itch from "../images/itch.png"

export default function Contact() {
    return (
        <div className="bg-dark-blue h-screen relative">
            <div className="absolute py-[3.5vh] px-[8vw] w-full bg-dark-blue text-white" >
                <p className="font-print-clearly text-[5vw]">Harits Nur Fauzan</p>
            </div>
            <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
                <div className="flex flex-col gap-y-[1vh]">
                    <div className="h-[10vh]" />
                    <h1 className="font-print-bold text-[18vw]">Contact</h1>
                    <div className="h-[2vh]" />
                    <div className="flex items-center gap-[4vw]">
                        <img src={Email} className="w-[5vw]" alt="Mail logo"/>
                        <p className="font-print-clearly">mharitsnf@gmail.com</p>
                    </div>
                    <div className="h-[2vh]" />
                    <a className="flex items-center gap-[4vw]" href="https://www.linkedin.com/in/mharitsnf/">
                        <img src={Linkedin} className="w-[5vw]" alt="Linkedin logo"/>
                        <p className="font-print-clearly">Linkedin</p>
                    </a>
                    <div className="h-[2vh]" />
                    <a className="flex items-center gap-[4vw] w-min" href="https://arsith.itch.io/">
                        <img src={Itch} className="w-[5vw]" alt="itch.io logo" />
                        <p className="font-print-clearly">itch.io</p>
                    </a>
                    <div className="h-[15vh]" />
                </div>
            </div>
            <Menu />
        </div>
    );
}