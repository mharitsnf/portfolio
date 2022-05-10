
export const LinkedIcon = ({ icon, alt, children, href }) => {
    return (
        <a className="flex items-center gap-[4vw]" href={ href } rel="noreferrer" target="_blank">
            <img src={ icon } className="w-[1.5rem] lg:w-[1.5vw]" alt={ alt } />
            <p className="font-print-bold text-[4vw] lg:text-[1.5vw] underline underline-offset-1">{ children }</p>
        </a>
    );
}

export const NonLinkedIcon = ({ icon, alt, children }) => {
    return (
        <div className="flex items-center gap-[4vw]">
            <img src={ icon } className="w-[1.5rem] lg:w-[1.5vw]" alt={ alt } />
            <p className="font-print-bold text-[4vw] lg:text-[1.5vw]">{ children }</p>
        </div>
    );
}