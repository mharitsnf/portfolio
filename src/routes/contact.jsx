
import { PageTitle } from "../components/pageTitle"
import { LinkedIcon, NonLinkedIcon } from "../components/linkedIcon"
import Email from "../images/email.png"
import Linkedin from "../images/linkedin-logo.png"
import Github from "../images/github.png"
import Itch from "../images/itch.png"

export default function Contact() {
    return (
        <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
            <div className="flex flex-col gap-y-[1vh] lg:w-[50vw]">
                <div className="h-[10vh]" />

                <div className="flex flex-col gap-y-[10vh]">
                    <PageTitle>Contact</PageTitle>
                    <p className="font-print-clearly text-[4.5vw] lg:text-[1.5vw]">
                        If you would like to work with me, don't hesitate to reach out to me! I am eager to experience new
                        possibilities in the game development, computer graphics, and other interactive technology field.
                    </p>
                    <div className="flex flex-col lg:flex-row flex-wrap gap-x-[6vw] gap-y-[4vh]">
                        <NonLinkedIcon icon={Email} alt="Mail logo">mharitsnf@gmail.com</NonLinkedIcon>
                        <LinkedIcon icon={Linkedin} href="https://www.linkedin.com/in/mharitsnf/" alt="Linkedin logo">Linkedin</LinkedIcon>
                    </div>

                    <div className="flex flex-col gap-y-[4vh]">
                        <p className="font-print-bold text-[4.5vw] lg:text-[1.5vw]">
                            External pages
                        </p>
                        <div className="flex flex-col lg:flex-row flex-wrap gap-x-[6vw] gap-y-[4vh]">
                            <LinkedIcon icon={Github} href="https://github.com/mharitsnf/" alt="Github logo">Github</LinkedIcon>
                            <LinkedIcon icon={Itch} href="https://itch.io/arsith/" alt="Itch.io logo">Itch.io</LinkedIcon>
                        </div>
                    </div>

                </div>

                <div className="h-[15vh]" />
            </div>
        </div>
    );
}