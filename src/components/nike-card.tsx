import shoes from "../assets/pngwing.png";

function NikeCard() {
  const SizeElement = ({ children }: { children: string }) => {
    return (
      <span className="w-6 h-6 text-sm flex items-center justify-center text-black bg-white mx-[5px] cursor-pointer rounded">
        {children}
      </span>
    );
  };

  return (
    <>
      <div className="relative">
        <div className="group bg-[#222023] h-[450px] w-[320px] relative before:[clip-path:circle(150px_at_80%_20%)] hover:before:[clip-path:circle(300px_at_80%_-20%)] rounded-[20px] overflow-hidden before:transition-all before:ease-in-out before:duration-500 before:bg-[#9bdc28] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full">
          <div className="absolute top-[50%] z-[10000] w-full h-[220px] transition-all duration-500 -translate-y-[50%] group-hover:translate-y-[0%] group-hover:top-0">
            <img
              src={shoes}
              alt="shoes"
              className="absolute w-[270px] rotate-[-25deg] -translate-y-[50%] -translate-x-[50%] top-[50%] left-[50%]"
            />
          </div>
          <h1 className="absolute top-[30%] left-[-50px] text-[#9bdc28] text-opacity-5 font-extrabold text-[12em]">
            Nike
          </h1>
          <div className="absolute bottom-0 w-full h-[100px] text-center transition-all duration-700 z-10 group-hover:h-[210px]">
            <h2 className="text-white font-semibold">Nike Shoes</h2>
            <div className="my-5 flex justify-center invisible bg-opacity-0 group-hover:visible group-hover:bg-opacity-100 transition delay-150 duration-500 ease-in-out">
              <h3 className="text-white font-light text-sm mr-2 uppercase">
                Size:
              </h3>
              <SizeElement>7</SizeElement>
              <SizeElement>8</SizeElement>
              <SizeElement>9</SizeElement>
              <SizeElement>10</SizeElement>
            </div>
            <div className="my-5 flex justify-center invisible bg-opacity-0 group-hover:visible group-hover:bg-opacity-100 transition delay-150 duration-500 ease-in-out">
              <h3 className="text-white font-light text-sm mr-2 uppercase">
                Color:
              </h3>
              {["!bg-[#9bdc28]", "!bg-[#03a9f4]", "!bg-[#e91e63]"].map(
                (color) => (
                  <span
                    key={color}
                    className={`h-5 w-5 rounded-full cursor-pointer mx-1 ${color}`}
                  />
                )
              )}
            </div>
            <button className="inline-block py-2 px-5 bg-white mt-2 rounded text-black font-bold bg-opacity-0 group-hover:bg-opacity-100 translate-y-[50px] group-hover:translate-y-[0px] transition delay-150 duration-500 ease-in-out">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NikeCard;
