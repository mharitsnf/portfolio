
export const MenuButton = ({ menu, handlePageChange }) => {
    return (
        <div className="text-white font-print-clearly h-min text-[4vw] md:text-[1.5vw]" >
            <button onClick={handlePageChange}>{menu}</button>
        </div>
    );
}