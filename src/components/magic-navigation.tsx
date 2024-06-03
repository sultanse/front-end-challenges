import { HiOutlineUser } from "@react-icons/all-files/hi/HiOutlineUser";
import { HiOutlineHeart } from "@react-icons/all-files/hi/HiOutlineHeart";
import { HiOutlinePlusCircle } from "@react-icons/all-files/hi/HiOutlinePlusCircle";
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { HiOutlineBell } from "@react-icons/all-files/hi/HiOutlineBell";
import { useEffect, useState } from "react";

enum ListEnum {
  HOME = "HOME",
  HEART = "HEART",
  PLUS = "PLUS",
  USER = "USER",
  BELL = "BELL",
}

function MagicNavigation() {
  const [active, setActive] = useState<ListEnum>(ListEnum.PLUS);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const list = [
    {
      name: ListEnum.HOME,
      icon: <HiOutlineHome size={36} />,
    },
    {
      name: ListEnum.HEART,
      icon: <HiOutlineHeart size={36} />,
    },
    {
      name: ListEnum.PLUS,
      icon: <HiOutlinePlusCircle size={36} />,
    },
    {
      name: ListEnum.USER,
      icon: <HiOutlineUser size={36} />,
    },
    {
      name: ListEnum.BELL,
      icon: <HiOutlineBell size={36} />,
    },
  ];

  const onMove = () => {
    switch (active) {
      case ListEnum.HOME:
        return 3.5;
      case ListEnum.HEART:
        return 23.5;
      case ListEnum.PLUS:
        return 43.5;
      case ListEnum.USER:
        return 63.5;
      case ListEnum.BELL:
        return 83.5;
      default:
        return 0;
    }
  };

  const handelColor = () => {
    switch (active) {
      case ListEnum.BELL:
        return "#CCFF00";
      case ListEnum.USER:
        return "#FF5E00";
      case ListEnum.PLUS:
        return "#EA00FF";
      case ListEnum.HEART:
        return "#FF3131";
      case ListEnum.HOME:
        return "#0FF0FC";
      default:
        return "#ffff";
    }
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    // cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="bg-[#1E2A3B] h-20 flex rounded-2xl relative border border-gray-700">
        <div className="flex items-center justify-around w-full">
          <div
            style={{ left: `${isMobile ? onMove() - 2.5 : onMove()}%` }}
            className="transition-all duration-500 absolute top-0 z-0"
          >
            <div
              style={{ backgroundColor: handelColor() }}
              className="h-[4px] flex items-start justify-center z-20 w-16 rounded-2xl"
            />
            <div className="inset-x-0 mx-auto h-20 clipPath bg-gradient-to-b from-white/20 to-black/10 z-0" />
          </div>
          {list.map((item) => (
            <button
              className="flex sm:w-[100px] w-[70px] items-center justify-around"
              key={item.name}
              onClick={() => {
                setActive(item.name as ListEnum);
              }}
            >
              <div
                className="text-gray-400"
                style={{
                  color: active === item.name ? handelColor() : "",
                  filter:
                    active === item.name
                      ? `drop-shadow(0px 0px 10px ${handelColor()})`
                      : "",
                }}
              >
                {item.icon}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MagicNavigation;
