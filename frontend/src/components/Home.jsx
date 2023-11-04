export default function Home() {
    return (
        <div className="flex justify-center items-start h-screen">
            {/* Centering container */}
            <div className="flex flex-col items-center w-full px-8 lg:px-16 mt-20"> {/* Increased margin-top (mt-20) */}
                {/* Main header */}
                <h1 className="text-5xl text-center mb-4">PROJECT NAME</h1>
                {/* Blue rectangle */}
                <div className="relative w-11/12 h-96 rounded-3xl bg-blue-500 flex flex-col justify-end mt-2"> {/* Added flex and justify-end */}
                    <h1 className="text-4xl text-black mt-4 ml-4">insideheader</h1> {/* Adjusted positioning */}
                    {/* Additional text at the bottom of insideheader with reduced line break spacing */}
                    <p className="text-black mt-2 ml-4" style={{ lineHeight: '1.2' }}>
                        Additional text at the bottom
                        <br />
                        Line break here
                        <br />
                        Another line break
                    </p>
                </div>
            </div>
        </div>
    );
}
