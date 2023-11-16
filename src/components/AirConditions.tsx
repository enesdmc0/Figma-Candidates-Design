import clsx from "clsx";
import React from "react";
import Icons, { IconNames } from "../utilities/icons";
import { airConditions } from "../constants/data.json";

interface Props {
  className: string;
}

interface DataProps {
  text: string;
  value: string;
  icon: IconNames;
  symbol?: string;
}

const AirConditions: React.FC<Props> = ({ className }) => {
  const formattedAirConditions = airConditions.split("::");

  const data: DataProps[] = [
    {
      text: "Real Feel",
      value: formattedAirConditions[0],
      icon: "Air",
      symbol: "°",
    },
    {
      text: "Wind",
      value: formattedAirConditions[2],
      icon: "Air1",
      symbol: "km/h",
    },
    {
      text: "Change of Rain",
      value: formattedAirConditions[1],
      icon: "Air2",
      symbol: "%",
    },
    { text: "UV Index", value: formattedAirConditions[3], icon: "Air3" },
  ];

  return (
    <div className={clsx("relative p-2 md:p-6", className)}>
      <div className=" flex flex-col gap-4 h-full">
        <div className="flex-1  flex items-center md:items-start md:flex-col justify-evenly">
          <div className="flex items-center gap-1 md:gap-3 font-medium md:text-[32px]">
            <img src={Icons.Clock} alt="clock" className=" w-6 h-6 sm:w-12 sm:h-12  md:w-16 md:h-16" />
            <span className="text-white text-xs md:text-base ">8:00 PM GMT</span>
          </div>
          <p className="font-bold text-white text-sm sm:text-2xl md:text-3xl ">AIR CONDITIONS</p>
        </div>

        <div className="grid grid-cols-2 flex-1  h-full w-full gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-span-1  flex items-center gap-2"
            >
              <img
                src={Icons[item.icon]}
                alt={item.text}
                className="w-8 sm:w-16 md:w-20 h-8 sm:h-16 md:h-20"
              />
              <div className="flex flex-col ">
                <span className="font-semibold text-xs sm:text-md text-white ">
                  {item.text}
                </span>
                <span className="font-semibold text-md text-white ">
                  {item.value} {item.symbol}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  background */}
      <img
        src={Icons.AirConditions}
        className="absolute bottom-0 inset-x-0"
        alt=""
      />
    </div>
  );
};

export default AirConditions;
