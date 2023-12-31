export default function Home() {
  const gradientStyle = {
      background: 'linear-gradient(to right top, #4d6b97, #0083ab, #009799, #00a564, #7caa15)',
  };

  return (
      <div className="flex justify-center items-start h-screen relative">
          {/* Black background pseudo-element */}
          <div className="absolute inset-0 bg-black z-0"></div>

          {/* Centering container */}
          <div className="relative z-10 flex flex-col items-center w-full px-8 lg:px-16 mt-20"> {/* Increased margin-top (mt-20) */}
              {/* Main header */}
              <h1 className="text-5xl text-center mb-4 text-white">PROJECT NAME</h1>
              {/* Blue rectangle */}
              <div className="relative w-11/12 h-96 rounded-3xl" style={gradientStyle}>
                  {/* Added flex and justify-end */}
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
