
import { Menu } from "../components/menu"
import { Header } from "../components/header"
import { PageTitle } from "../components/pageTitle"
import { LinkedIcon, NonLinkedIcon } from "../components/linkedIcon"
import Email from "../images/email.png"
import Linkedin from "../images/linkedin-logo.png"
import Itch from "../images/itch.png"

export default function Contact() {
    return (
        <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
            <div className="flex flex-col gap-y-[1vh]">
                <div className="h-[10vh]" />
                <PageTitle>Contact</PageTitle>
                <div className="h-[2vh]" />
                <NonLinkedIcon icon={Email} alt="Mail logo">mharitsnf@gmail.com</NonLinkedIcon>
                <div className="h-[2vh]" />
                <LinkedIcon icon={Linkedin} href="https://www.linkedin.com/in/mharitsnf/" alt="Linkedin logo">Linkedin</LinkedIcon>
                <div className="h-[2vh]" />
                <LinkedIcon icon={Itch} href="https://arsith.itch.io/" alt="itch.io logo">itch.io</LinkedIcon>
                <div className="h-[15vh]" />
            </div>
        </div>
    );
}