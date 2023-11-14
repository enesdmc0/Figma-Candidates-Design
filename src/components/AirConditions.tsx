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
    { text: "Real Feel", value: formattedAirConditions[0], icon: "Air", symbol: "°" },
    { text: "Wind", value: formattedAirConditions[2], icon: "Air1", symbol: "km/h" },
    { text: "Change of Rain", value: formattedAirConditions[1], icon: "Air2", symbol: "%" },
    { text: "UV Index", value: formattedAirConditions[3], icon: "Air3" },
  ];

  return (
    <div className={clsx("relative p-6", className)}>
      <div className=" flex flex-col h-full">
        <div className="flex-1 flex flex-col justify-evenly">
          <div className="flex items-center gap-3 font-medium text-[32px]">
            <img src={Icons.Clock} alt="clock" />
            <span className="text-white">8:00 PM GMT</span>
          </div>
          <p className="font-bold text-white text-3xl">AIR CONDITIONS</p>
        </div>
        <div className="grid grid-cols-2 flex-1  h-full w-full gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-span-1  flex items-center justify-center gap-2"
            >
              <img
                src={Icons[item.icon]}
                alt={item.text}
                className="w-20 h-20"
              />
              <div className="flex flex-col ">
                <span className="font-semibold text-md text-white ">{item.text}</span>
                <span className="font-semibold text-md text-white " >{item.value} {item.symbol} </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={Icons.AirConditions}
        className="absolute bottom-0 inset-x-0"
        alt=""
      />
    </div>
  );
};

export default AirConditions;
