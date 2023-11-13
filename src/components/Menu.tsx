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
    <div className={clsx("flex flex-col items-center justify-center gap-4", className)}>
      {Object.entries(data).map(([key, value], index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <img src={Icons[value]} alt="Menu Logo" />
          <span className={clsx("", key === "weather" ? "text-white" : "text-[#C4C3C1]" )}>{key}</span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
