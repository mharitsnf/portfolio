
export const PageTitle = ({ children, route }) => {
    return (
        <h1 className={`font-print-bold ${route && route === "ICOIAS2019" ? 'text-[200%] lg:text-[2rem]' : 'text-[18vw] lg:text-[6.5vw]'}`}>{ children }</h1>
    );
}