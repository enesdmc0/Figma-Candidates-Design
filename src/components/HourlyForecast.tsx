import clsx from "clsx";
import React from "react";
import Icons, { IconNames } from "../utilities/icons";
import { forecast } from "../constants/data.json";
interface Props {
  className: string;
}

interface DataProps {
  icon: IconNames;
  time: string;
  temp: string;
  wind: string;
  top: number
}

const HourlyForecast: React.FC<Props> = ({ className }) => {
  const customData = Object.entries(forecast).map(([key, value]) => {
    return { key, value };
  });

  const data: DataProps[] = [
    {
      icon: "Forecast",
      time: customData[0].key,
      temp: customData[0].value,
      wind: "5",
      top: -10
    },
    {
      icon: "Forecast1",
      time: customData[1].key,
      temp: customData[1].value,
      wind: "5",
      top: -0
    },
    {
      icon: "Forecast2",
      time: customData[2].key,
      temp: customData[2].value,
      wind: "5",
      top: 15
    },
    {
      icon: "Forecast",
      time: customData[3].key,
      temp: customData[3].value,
      wind: "5",
      top: 10
    },
    {
      icon: "Forecast1",
      time: customData[4].key,
      temp: customData[4].value,
      wind: "5",
      top: 20
    },
    {
      icon: "Forecast2",
      time: customData[5].key,
      temp: customData[5].value,
      wind: "5",
      top: 15
    },
    {
      icon: "Forecast",
      time: customData[5].key,
      temp: customData[5].value,
      wind: "5",
      top: 10
    },
  ];

  return (
    <div className={clsx(" grid grid-row-3", className)}>
      <div className="row-span-1  bg-opacity-0 flex items-center justify-center">
        <img
          src={Icons.SmartMaple}
          alt="Smart Maple"
          className="w-[265px] h-16 "
        />
      </div>

      <div className="flex flex-col gap-5 bg-[#C4C3C166] rounded-2xl row-span-2 p-3">
        <div className="flex items-center h-fit gap-2 ">
          <img src={Icons.Clock1} alt="Clock" className="w-10 h-10" />
          <span className="text-white font-semibold text-xl">
            Hourly Forecast
          </span>
        </div>

        <div className="relative h-full w-full ">
          <div className="grid grid-cols-7  ">
            {data.map((item, index) => (
              <div key={index} style={{top: `${item.top}px`}} className="col-span-1 relative h-24 flex flex-col items-center justify-between  ">
                <div className="text-white"> {item.temp}° </div>
                <div className="flex flex-col ">
                  <img src={Icons[item.icon]} alt="Forecast" className="w-7 h-7" />
                  <span className="text-white font-medium text-[10px] text-center"> {item.temp} km/h </span>
                  <span className="text-white font-medium text-[10px] text-center"> {item.time} </span>
                </div>
              </div>
            ))}
          </div>

          <img
            src={Icons.Line}
            alt="Line"
            className="w-full absolute inset-x-0 top-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
