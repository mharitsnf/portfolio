
export const LinkedIcon = ({ icon, alt, children, href }) => {
    return (
        <a className="flex items-center gap-[4vw]" href={ href } rel="noreferrer" target="_blank">
            <img src={ icon } className="w-[5vw] md:w-[2vw]" alt={ alt } />
            <p className="font-print-clearly md:text-[2vw] underline underline-offset-1">{ children }</p>
        </a>
    );
}

export const NonLinkedIcon = ({ icon, alt, children }) => {
    return (
        <div className="flex items-center gap-[4vw]">
            <img src={ icon } className="w-[5vw] md:w-[2vw]" alt={ alt } />
            <p className="font-print-clearly md:text-[2vw]">{ children }</p>
        </div>
    );
}