
import { Menu } from "../components/menu";

export default function Projects() {
    return (
        <div className="bg-dark-blue h-screen relative">
            <div className="absolute py-[3.5vh] px-[8vw] w-full bg-dark-blue text-white" >
                <p className="font-print-clearly text-[5vw]">Harits Nur Fauzan</p>
            </div>
            <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
                <div className="flex flex-col gap-y-[1vh]">
                    <div className="h-[10vh]" />
                    <h1 className="font-print-bold text-[18vw]">Projects</h1>
                    <div className="h-[3vh]" />

                    <div>
                        
                    </div>

                    <div className="h-[15vh]" />
                </div>
            </div>
            <Menu />
        </div>
    );
}