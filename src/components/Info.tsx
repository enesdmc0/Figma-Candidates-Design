import React from "react";
import clsx from "clsx";
import Icons from "../utilities/icons";
import { city, type, degree, date } from "../constants/data.json";

interface Props {
  className: string;
}

const Info: React.FC<Props> = ({ className }) => {
  const customDate = date.split(":")[0];

  return (
    <div className={clsx("flex flex-col md:flex-row  p-4", className)}>
      <div className="flex-1 flex items-center justify-between">
        {/* left */}
        <div className="flex h-full justify-between  flex-col">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <img src={Icons.Location} alt="Location" className="md:w-8 md:h-8 w-6 h-6" />
              <p className="text-white text-xl font-semibold whitespace-nowrap "> {city} </p>
            </div>
            <p className="text-white font-semibold text-xl md:text-center"> {type} </p>
          </div>
          <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white md:text-center"> {degree} °C </p>
        </div>
        {/* center */}
        <img src={Icons.Forecast2} alt="Air" className=" w-20 sm:w-28 md:w-32 2xl:w-40 xl:w-52 h-20 sm:h-28 md:h-32 lg:h-40 2xl:h-52" />
      </div>
      {/* right */}
      <div className=" flex items-center justify-end md:justify-center flex-1">
        <p className="text-white font-medium text-md sm:text-xl md:text-2xl xl:text-3xl whitespace-nowrap "> {customDate} </p>
      </div>
    </div>
  );
};

export default Info;
