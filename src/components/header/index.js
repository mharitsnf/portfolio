
export const Header = () => {
    return (
        <div className="absolute py-[3.5vh] px-[8vw] w-full bg-dark-blue text-white" >
            <p className="font-print-clearly text-[5vw] lg:text-[2vw]">Harits Nur Fauzan</p>
        </div>
    );
}

export const Header2 = ({ children }) => {
    return (
        <h2 className="font-print-bold text-[12vw] lg:text-[4vw]">{ children }</h2>
    );
}

export const Header3 = ({ children }) => {
    return (
        <h3 className="font-print-bold text-[6vw] lg:text-[3vw] ">{ children }</h3>
    );
}