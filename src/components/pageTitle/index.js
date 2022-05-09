
export const PageTitle = ({ children, route }) => {
    return (
        <h1 className={`font-print-bold text-[18vw] ${route && route === "ICOIAS2019" ? 'lg:text-[300%]' : 'lg:text-[6.5vw]'}`}>{ children }</h1>
    );
}