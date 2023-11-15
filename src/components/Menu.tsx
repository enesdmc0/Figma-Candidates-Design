import clsx from "clsx";
import React from "react";
import Icons, { IconNames } from "../utilities/icons";

interface Props {
  className: string;
}

interface Data {
  [key: string]: IconNames;
}

const Menu: React.FC<Props> = ({ className }) => {
  const data: Data = {
    "Menu Logo": "MenuLogo",
    "weather": "MenuWeather",
    "explore": "MenuExplore",
    "cities": "MenuCities",
    "settings": "MenuSettings",
  };

  return (
    <div className={clsx("flex md:flex-col items-center justify-around md:justify-center md:gap-4 p-2", className)}>
      {Object.entries(data).map(([key, value], index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <img src={Icons[value]} alt="Menu Logo" className="w-5 sm:w-10 md:w-max h-5 sm:h-10 md:h-max" />
          <span className={clsx("text-[10px] sm:text-xs md:text-base", key === "weather" ? "text-white" : "text-[#C4C3C1]" )}>{key}</span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
