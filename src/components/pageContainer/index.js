
export const PageContainer = ({ children }) => {
    return (
        <div className="text-white py-[4vh] px-[8vw] h-full overflow-scroll">
            <div className="flex flex-col gap-y-[1vh] lg:w-[70vw]">
                <div className="h-[10vh]" />

                <div className="flex flex-col gap-y-[30vh] lg:gap-y-[20vh]">
                    { children }
                </div>

                <div className="h-[25vh] lg:h-[30vh]" />

            </div>
        </div>
    );
}